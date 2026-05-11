import { Check, Eraser, Plus, Printer, RotateCcw, Share2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "#/components/app/button.tsx";
import BulkPaste from "./BulkPaste.tsx";
import EntryForm from "./EntryForm.tsx";
import PurchasePlanner from "./PurchasePlanner.tsx";
import ResultsTable from "./ResultsTable.tsx";
import {
  buildEmptyEntry,
  compute,
  type CategoryDefinition,
  type ProductEntry,
} from "#/lib/pricing.ts";
import { pushRecent } from "#/lib/recent.ts";
import { buildShareUrl, decodeEntries } from "#/lib/share.ts";

interface Props {
  category: CategoryDefinition;
}

const STORAGE_PREFIX = "qc:entries:";

const initialEntries = (category: CategoryDefinition): ProductEntry[] => {
  if (category.sampleEntries && category.sampleEntries.length > 0) {
    return category.sampleEntries.map((e) => ({ ...e, counts: { ...e.counts } }));
  }
  return [buildEmptyEntry(category), buildEmptyEntry(category)];
};

export default function Comparator({ category }: Props) {
  const [entries, setEntries] = useState<ProductEntry[]>(() =>
    initialEntries(category),
  );
  // Marks the moment we've finished reading localStorage so we don't persist
  // the SSR-initialized sample values on top of the user's saved data.
  const [hydrated, setHydrated] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const shareTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fromShareLink, setFromShareLink] = useState(false);

  // U2 — `?d=…` URL takes precedence over localStorage and replaces history
  // so the user can keep editing without the share token cluttering future URLs.
  useEffect(() => {
    if (typeof window === "undefined") {
      setHydrated(true);
      return;
    }
    pushRecent(category.slug);
    const params = new URLSearchParams(window.location.search);
    const shared = params.get("d");
    if (shared) {
      const decoded = decodeEntries(shared);
      if (decoded && decoded.length > 0) {
        setEntries(decoded);
        setFromShareLink(true);
        params.delete("d");
        const query = params.toString();
        const url =
          window.location.pathname + (query ? `?${query}` : "") + window.location.hash;
        window.history.replaceState(window.history.state, "", url);
        setHydrated(true);
        return;
      }
    }
    try {
      const stored = window.localStorage.getItem(
        `${STORAGE_PREFIX}${category.slug}`,
      );
      if (stored) {
        const parsed = JSON.parse(stored) as ProductEntry[];
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      /* corrupt JSON or unavailable — ignore */
    }
    setHydrated(true);
  }, [category.slug]);

  // Persist after hydration only (otherwise we'd overwrite saved data with
  // the SSR-initialised sample entries on every page load).
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        `${STORAGE_PREFIX}${category.slug}`,
        JSON.stringify(entries),
      );
    } catch {
      /* quota exceeded or storage disabled — ignore */
    }
  }, [entries, category.slug, hydrated]);

  const results = useMemo(() => compute(category, entries), [category, entries]);

  const updateAt = (i: number, next: ProductEntry) => {
    setEntries((prev) => prev.map((e, idx) => (idx === i ? next : e)));
  };

  const removeAt = (i: number) => {
    setEntries((prev) => prev.filter((_, idx) => idx !== i));
  };

  const addEntry = () => {
    setEntries((prev) => [...prev, buildEmptyEntry(category)]);
  };

  const appendEntries = (extra: ProductEntry[]) => {
    setEntries((prev) => [...prev, ...extra]);
  };

  const reset = () => setEntries(initialEntries(category));
  const clear = () => setEntries([]);

  const share = async () => {
    if (typeof window === "undefined") return;
    const url = buildShareUrl(category.slug, entries);
    try {
      if (navigator.share) {
        await navigator.share({ title: category.name, url });
        return;
      }
    } catch {
      /* user dismissed share sheet — fall through to clipboard */
    }
    try {
      await navigator.clipboard.writeText(url);
      setShareState("copied");
      if (shareTimer.current) clearTimeout(shareTimer.current);
      shareTimer.current = setTimeout(() => setShareState("idle"), 2000);
    } catch {
      window.prompt("Copia il link e condividilo:", url);
    }
  };

  useEffect(
    () => () => {
      if (shareTimer.current) clearTimeout(shareTimer.current);
    },
    [],
  );

  return (
    <div className="space-y-6">
      {fromShareLink && (
        <div
          className="glass flex flex-wrap items-center gap-3 rounded-lg p-4"
          data-print="hide"
        >
          <Share2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div className="flex-1 min-w-0 text-sm">
            <strong className="font-semibold">Comparazione condivisa caricata.</strong>{" "}
            <span className="text-muted-foreground">
              Stai vedendo i prodotti scelti da chi ti ha mandato il link. Puoi
              modificarli liberamente.
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              reset();
              setFromShareLink(false);
            }}
          >
            <RotateCcw className="h-4 w-4" />
            Riparti dagli esempi
          </Button>
        </div>
      )}

      {entries.length === 0 ? (
        <div className="rounded-lg border border-dashed bg-muted/40 py-12 px-4 text-center space-y-4">
          <p className="text-muted-foreground">
            Nessun prodotto in confronto. Aggiungi i tuoi oppure carica gli
            esempi.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button type="button" variant="gradient" onClick={addEntry}>
              <Plus className="h-4 w-4" />
              Aggiungi prodotto
            </Button>
            <Button type="button" variant="outline" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              Mostra esempi
            </Button>
          </div>
        </div>
      ) : (
        <>
          <section
            aria-label="Prodotti da confrontare"
            className="space-y-3"
            data-print="hide"
          >
            {entries.map((entry, i) => (
              <EntryForm
                key={i}
                index={i}
                category={category}
                entry={entry}
                onChange={(next) => updateAt(i, next)}
                onRemove={() => removeAt(i)}
              />
            ))}
          </section>

          <div data-print="hide">
            <BulkPaste category={category} onImport={appendEntries} />
          </div>

          <div
            className="flex flex-wrap items-center gap-2"
            data-print="hide"
          >
            <Button type="button" variant="outline" onClick={addEntry}>
              <Plus className="h-4 w-4" />
              Aggiungi prodotto
            </Button>
            <Button type="button" variant="ghost" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              Reimposta esempi
            </Button>
            <Button type="button" variant="ghost" onClick={clear}>
              <Eraser className="h-4 w-4" />
              Svuota tutto
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => window.print()}
              className="ml-auto"
              aria-label="Stampa lista comparazione"
            >
              <Printer className="h-4 w-4" />
              Stampa
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={share}
              aria-live="polite"
            >
              {shareState === "copied" ? (
                <>
                  <Check className="h-4 w-4" />
                  Link copiato
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  Condividi
                </>
              )}
            </Button>
          </div>

          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className="mb-3 text-xl font-semibold">
              Risultati
            </h2>
            <ResultsTable category={category} results={results} />
          </section>

          <div data-print="hide">
            <PurchasePlanner category={category} results={results} />
          </div>
        </>
      )}
    </div>
  );
}

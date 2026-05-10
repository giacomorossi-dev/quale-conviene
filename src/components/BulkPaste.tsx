import { ClipboardPaste, X } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "#/components/app/button.tsx";
import { Textarea } from "#/components/app/textarea.tsx";
import { parseBulkPaste } from "#/lib/bulk-paste.ts";
import {
  type CategoryDefinition,
  type ProductEntry,
} from "#/lib/pricing.ts";

interface Props {
  category: CategoryDefinition;
  onImport: (entries: ProductEntry[]) => void;
}

function exampleFor(category: CategoryDefinition): string {
  const sample = category.sampleEntries?.[0];
  if (!sample) return "Nome prodotto, 1.99, 1, L";
  const parts: (string | number)[] = [
    sample.name ?? "Prodotto",
    sample.price,
    sample.measureValue,
  ];
  if (sample.measureUnitId && sample.measureUnitId !== "count") {
    parts.push(sample.measureUnitId);
  }
  if (category.context === "dosage" && sample.doseCount !== undefined) {
    parts.push(sample.doseCount);
  }
  return parts.join(", ");
}

export default function BulkPaste({ category, onImport }: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const helpId = useId();

  const handleImport = () => {
    const rows = parseBulkPaste(category, text);
    const errors = rows.filter((r) => r.error);
    if (errors.length > 0) {
      setError(
        `Riga ${errors[0].lineNumber}: ${errors[0].error}` +
          (errors.length > 1 ? ` (+${errors.length - 1} altri errori)` : ""),
      );
      return;
    }
    if (rows.length === 0) {
      setError("Nessuna riga valida trovata");
      return;
    }
    onImport(rows.map((r) => r.entry));
    setText("");
    setError(null);
    setOpen(false);
  };

  if (!open) {
    return (
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
      >
        <ClipboardPaste className="h-4 w-4" />
        Incolla righe
      </Button>
    );
  }

  return (
    <div className="space-y-2 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold">Incolla più prodotti</h3>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => {
            setOpen(false);
            setError(null);
          }}
          aria-label="Chiudi pannello incolla"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <p id={helpId} className="text-sm text-muted-foreground">
        Una riga per prodotto, separa i campi con virgola o tab:
        <br />
        <code className="text-xs">
          nome, prezzo, quantità
          {category.context === "liquid" || category.context === "weight"
            ? ", unità"
            : ""}
          {category.context === "dosage" ? ", lavaggi" : ""}
        </code>
        <br />
        Esempio: <code className="text-xs">{exampleFor(category)}</code>
      </p>
      <Textarea
        value={text}
        onChange={(e) => {
          setText(e.currentTarget.value);
          setError(null);
        }}
        rows={6}
        className="font-mono"
        aria-describedby={helpId}
        placeholder={exampleFor(category)}
      />
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <div className="flex justify-end gap-2">
        <Button type="button" variant="ghost" onClick={() => setText("")}>
          Pulisci
        </Button>
        <Button type="button" onClick={handleImport} disabled={!text.trim()}>
          Aggiungi alle righe
        </Button>
      </div>
    </div>
  );
}

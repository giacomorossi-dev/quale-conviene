import type { ProductEntry } from "./pricing.ts";

const VERSION = 1;

interface SharePayload {
  v: number;
  e: ProductEntry[];
}

function toBase64Url(str: string): string {
  const b64 =
    typeof window !== "undefined"
      ? window.btoa(unescape(encodeURIComponent(str)))
      : Buffer.from(str, "utf8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(token: string): string {
  const pad = "===".slice((token.length + 3) % 4);
  const b64 = token.replace(/-/g, "+").replace(/_/g, "/") + pad;
  return typeof window !== "undefined"
    ? decodeURIComponent(escape(window.atob(b64)))
    : Buffer.from(b64, "base64").toString("utf8");
}

export function encodeEntries(entries: ProductEntry[]): string {
  const payload: SharePayload = { v: VERSION, e: entries };
  return toBase64Url(JSON.stringify(payload));
}

export function decodeEntries(token: string): ProductEntry[] | null {
  try {
    const data = JSON.parse(fromBase64Url(token)) as SharePayload;
    if (!data || typeof data !== "object" || !Array.isArray(data.e)) return null;
    return data.e;
  } catch {
    return null;
  }
}

export function buildShareUrl(slug: string, entries: ProductEntry[]): string {
  if (typeof window === "undefined") return "";
  const url = new URL(`/${slug}`, window.location.origin);
  url.searchParams.set("d", encodeEntries(entries));
  return url.toString();
}

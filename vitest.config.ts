import { defineConfig } from "vitest/config";

/**
 * Vitest config kept separate from `vite.config.ts` because the Cloudflare
 * Vite plugin in there isn't compatible with the Vitest dev server. Tests
 * for `src/lib/*` are pure-TS and don't need any framework plugin.
 */
export default defineConfig({
  resolve: {
    alias: {
      "#": new URL("./src", import.meta.url).pathname,
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});

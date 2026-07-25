// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow overriding the Nitro preset via env (e.g. NITRO_PRESET=node-server).
// Defaults to `node-server` so `npm run build` produces a standalone Node.js
// server at `.output/server/index.mjs`, suitable for Coolify / Railway / Render / any VPS.
const nitroPreset = process.env.NITRO_PRESET ?? "node-server";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    preset: nitroPreset,
  },
});

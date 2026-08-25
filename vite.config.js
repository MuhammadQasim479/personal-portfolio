import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // `__dirname` is not defined in an ES module — resolve from the module
      // URL instead so the alias works without a CJS shim.
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Trim the noise; the app is well under the default 500 kB warning anyway.
    chunkSizeWarningLimit: 600,
  },
});

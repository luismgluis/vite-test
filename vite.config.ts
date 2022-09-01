import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("semantic-ui")) {
            return "semantic";
          } else if (id.includes("react-dom")) {
            return "react";
          } else if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});

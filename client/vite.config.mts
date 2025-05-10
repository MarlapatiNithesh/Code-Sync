import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../server/public"), // Output build to server/public
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600, // Adjust this limit based on your needs
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .split("node_modules/")[1]
              .split("/")[0]; // Creating chunks from node_modules
          }
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@", // Simplifies imports from the `src` folder
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  preview: {
    port: 5173, // Port for the preview server
  },
  server: {
    open: true, // Automatically open the browser on server start
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Exclude non-source folders that may contain locked files (e.g. video files)
      ignored: ["**/New folder/**", "**/*.mp4", "**/*.mov", "**/*.avi"],
    },
  },
});

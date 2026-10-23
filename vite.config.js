import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so it works on any GitHub Pages repo name
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 4000
  }
});

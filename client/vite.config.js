import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  daisyui: {
  themes: ["dark", "cupcake", "emerald", "dracula", "night","synthwave","retro"],
}
});
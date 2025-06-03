import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/goit-js-hw-09/",
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        gallery: resolve(__dirname, "src/1-gallery.html"),
        form: resolve(__dirname, "src/2-form.html"),
      },
    },
  },
});

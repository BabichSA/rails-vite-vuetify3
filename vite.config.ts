import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [RubyPlugin(), vue()],
  define: { "process.env": {} },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'app/frontend/stylesheets/variables.scss';\n`,
      },
    },
  },
});

import { defineConfig } from "@vizejs/vite-plugin/vite-plus";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "prompt",
      injectRegister: false,
      pwaAssets: {
        disabled: false,
        config: true,
      },
      manifest: {
        name: "vue-portfolio-templete",
        short_name: "vue-portfolio-templete",
        description: "vue.js products --- portfolio template",
        theme_color: "#ffffff",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}).withVue({
  linter: {
    rules: {
      // Portfolio detail links come from trusted local JSON data.
      "vue/no-unsafe-url": "off",
    },
  },
});

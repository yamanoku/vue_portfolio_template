import { createRequire } from "node:module";
import { VitePWA } from "vite-plugin-pwa";

const require = createRequire(import.meta.url);

const pwa = VitePWA({
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
});

const shared = {
  resolve: {
    alias: {
      "@": "/src",
    },
  },
};

// Vize's linux-gnu native binding needs GLIBC 2.35+, but Vercel's AL2023
// build image ships glibc 2.34. Fall back to @vitejs/plugin-vue there.
// Lint/format still run via Vize on local and GitHub CI hosts.
function createConfig() {
  if (process.env.VERCEL === "1") {
    const { defineConfig } = require("vite-plus") as typeof import("vite-plus");
    const vue = require("@vitejs/plugin-vue") as typeof import("@vitejs/plugin-vue");
    return defineConfig({
      ...shared,
      plugins: [vue.default(), pwa],
    });
  }

  const { defineConfig } =
    require("@vizejs/vite-plugin/vite-plus") as typeof import("@vizejs/vite-plugin/vite-plus");
  return defineConfig({
    ...shared,
    plugins: [pwa],
  }).withVue({
    linter: {
      rules: {
        // Portfolio detail links come from trusted local JSON data.
        "vue/no-unsafe-url": "off",
      },
    },
  });
}

export default createConfig();

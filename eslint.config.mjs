import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {files: ["src/**/*.vue"]},
  {languageOptions: { globals: globals.browser }},
  ...pluginVue.configs["flat/essential"],
  {files: ["src/**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules: {
      "vue/multi-word-component-names": "off",
    }
  },
  {ignores: ["dist"]},
];

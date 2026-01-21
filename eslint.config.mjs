import { defineConfig } from "eslint/config";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";


export default defineConfig([
  react.configs.recommended,
  reactHooks.configs.recommended,
  prettierConfig,
  {
    ignores: ["eslint.config.mjs", "node_modules", "dist", "build"],
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],

    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      react,
      prettier,
    },
    rules: {
      "react/prop-types": "off",
      semi: "off",
      "prefer-const": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prettier/prettier": "warn",
    },
  },
]);

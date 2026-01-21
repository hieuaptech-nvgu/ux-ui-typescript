import { defineConfig } from "eslint/config";
import globals from "globals";

import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  prettierConfig,
  {
    ignores: ["eslint.config.mjs", "node_modules", "dist", "build"],
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],

    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      react: react,
      prettier: prettier
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

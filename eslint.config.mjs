import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Esto arregla el error de 'process' en server.js
        ...globals.jest, // Esto arregla los errores de 'describe', 'test', etc.
      },
    },
    rules: {
      "no-unused-vars": "warn", // Cambia a 'error' si quieres ser más estricto
      "no-undef": "error",
    },
  },
];
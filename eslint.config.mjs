import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    // Aplicar a tus archivos de la aplicación
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // Para que no falle con tus 'require'
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
  {
    // Configuración especial para que el propio archivo .mjs no de error
    files: ["eslint.config.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Aquí sí permitimos 'import'
    },
  }
];
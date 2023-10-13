/**
 * @type import("tailwindcss").Config
 */

const config = {
  content: [
    "./src/**/*.tsx",
    "./public/index.html"
  ],
  theme: {
    colors: {
      surface: "var(--surface)",
      "surface-1": "var(--surface-1)",
      "surface-2": "var(--surface-2)",
      "on-surface": "var(--on-surface)",
      "primary-accent": "var(--primary-accent)",
      "primary-accent-light": "var(--primary-accent-light)",
    },
    extend: {
      borderColor: {
        main: "var(--border-color)"
      }
    }
  },
  darkMode: "media",
}

module.exports = config;
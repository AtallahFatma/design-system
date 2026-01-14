/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        danger: "var(--color-danger)",
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};

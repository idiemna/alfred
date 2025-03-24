/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        text: "0 0 2px 2px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("dark", "&:where(.dark, .dark *)");
    },
  ],
};

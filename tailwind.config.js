/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#C6A078",
        third: "#BBBBBB",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    // require("prettier-plugin-tailwindcss"),
  ],
};

const { nextui } = require("@nextui-org/react");
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
module.exports = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "min-sm": "640px",
        "min-md": "768px",
        "min-lg": "1024px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});

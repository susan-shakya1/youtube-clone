import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        bgColor:"#0F0F0F",
        bgHover:"#272727",
        textColor:"#F1F1F1"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;

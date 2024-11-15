import type { Config } from "tailwindcss";

const config: Config = {
  mode:'jit',
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary:'#DB4444',
        inputBG:"#FAFAFA",
        primary:"#FFFFFF",
        button1:"#00FF66",
        button2:"#DB4444",
        buttonHover:"#E07575",
        textColor:"#ffffff",
        textColor1:"#7D8184",
        textColor2:"#000000",
        cardSecondary:"#F5F5F5"
      },
    },
  },
  plugins: [],
};
export default config;

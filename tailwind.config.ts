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
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary:'#F5F5F5'
      },
    },
  },
  plugins: [],
};
export default config;

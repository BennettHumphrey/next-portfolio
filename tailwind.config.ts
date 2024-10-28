import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xxsm: '365px',
      xsm: "480px",
      sm: "550px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        'bg-light': "var(--bg-light)",
        'bg-dark': "var(--bg-dark)",
        'text-dark': "var(--text-dark)",
      },
    },
  },
  plugins: [],
};
export default config;

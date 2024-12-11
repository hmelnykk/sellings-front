import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary: "#2C80E5",
      },
      backgroundColor: {
        primary: "#EBF3FC",
        "primary-darken": "#d5e6fa",
      },
      borderRadius: {
        default: "10px",
      }
    },
  },
  plugins: [],
};
export default config;

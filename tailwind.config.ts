import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem" },
        screens: {
          xs: "320px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      colors: {
        primary: "#DBE0E1",
        secondary: "#C9C1B1",
        tetiary: "#020D19",
      },
    },
  },
  plugins: [],
};
export default config;

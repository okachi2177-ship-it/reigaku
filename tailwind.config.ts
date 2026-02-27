import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8960C",
          light: "#C9A84C",
          dark: "#8A6F09",
        },
        navy: {
          DEFAULT: "#1A1A40",
          light: "#2A2A60",
        },
        cream: "#FAFAF5",
        text: "#2D2D2D",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B8960C 0%, #C9A84C 50%, #B8960C 100%)",
        "navy-gradient": "linear-gradient(135deg, #1A1A40 0%, #2A2A60 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

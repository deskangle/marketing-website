import type { Config } from "tailwindcss";
import { COLORS } from "./src/app/_assets/theme/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // custom app based color extensions
      colors: { ...COLORS },

      //  custom slide down animation
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", marginLeft: "-100%" },
          "100%": { opacity: "1", marginLeft: "0" },
        },

        "zoom-in": {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },

        "drift-down": {
          from: {
            marginBottom: "-50%",
          },
          to: {
            marginBottom: "0",
          },
        },

        "slide-down": {
          "0%": {
            transform: "translateY(-14%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "zoom-in": "zoom-in 0.5s ease-in-out",
        "drift-down": "drift-down 0.4s ease-in-out forwards",
        "slide-down": "slide-down 0.4s ease-in-out",
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;

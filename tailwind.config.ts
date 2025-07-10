import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["'Orbitron'", "sans-serif"],
      },
      animation: {
        neon: "neon-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "neon-pulse": {
          "0%, 100%": {
            textShadow: "0 0 8px #ec4899, 0 0 16px #ec4899",
          },
          "50%": {
            textShadow: "0 0 12px #ec4899, 0 0 24px #ec4899",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

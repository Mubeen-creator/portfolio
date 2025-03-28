import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust paths based on Next.js 15
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 3s linear infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        futuristic: "0 0 40px -10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;

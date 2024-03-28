/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#F5F7FA",
        "gray-100": "#E0E0E0",
        "gray-500": "#4D4D4D",
        "primary-100": "#43A046",
        "primary-300": "#388E3B",
        "primary-500": "#1B5E1F",
        "secondary-400": "#4D4D4D",
        "secondary-500": "#263238",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0% #FFC837 100%)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        circles: "url('./assets/Circles.png')",
        sparkles: "url('./assets/Sparkles.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
      },
    },
    screens: {
      customh: { raw: "((min-height:750px) and (max-width:500px))" },
      xs: "480px",
      sm: "768px",
      md: "600px",
    },
  },
  plugins: [],
};

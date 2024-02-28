/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      system: ["system-ui", "ui-sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        theme1: "#257378",
        theme1light: "#edfcfc",
        theme1h: "#1c5f63",
        themeblack: "black",
        whitecolor: "white",
        
      },
    },
  },
  plugins: [],
};

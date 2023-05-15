/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1E6B46",
        secondary: "#444444",
        nav: "#3D3D3D",
        third: "#FAD10A",
        blur: "#B3B3B3",
        doctor: "#E36955",
        family: "#F1AE44",
        school: "#863BAE",
        mosque: "#50BAC3",
        berita: "#F0F0F0",
        wa: "#25D366",
        table: "#6B7280"
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

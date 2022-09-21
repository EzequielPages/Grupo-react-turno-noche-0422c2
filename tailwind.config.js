/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "first-color": "#22353c",
      "second-color": "#dea26c",
      "third-color": "#6f4837",
      "fourth-color": "#05080d",
      "fifth-color": "#a26e49",
      "sixth-color": "#3d272a",
      "seventh-color": "#e7e3e2",
    },
    extend: {},
  },
  /**** CONFIG DE COLORES DE DAISYUI ****/

  daisyui: {
    themes: [
      {
        palete: {
          primary: "#dea26c",

          secondary: "#6f4837",

          tertiary: "#3d272a",

          fourth: "#05080d",

          accent: "#a26e49",

          neutral: "#22353c",

          "base-100": "#e7e3e2",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}

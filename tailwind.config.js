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
  plugins: [require("daisyui")],
};

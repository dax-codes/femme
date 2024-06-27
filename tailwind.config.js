/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        darkslategray: {
          "100": "#2b2f38",
          "200": "#2d2d2d",
        },
        white: "#fff",
        crimson: {
          "100": "#ff5777",
          "200": "#ff3c61",
          "300": "#ff3b61",
          "400": "rgba(255, 60, 97, 0.5)",
          "500": "rgba(255, 60, 97, 0.2)",
        },
        palevioletred: "#ff8ea4",
        gray: {
          "100": "#8d7575",
          "200": "#292929",
          "300": "#171717",
          "400": "#161616",
          "500": "#010e06",
        },
        "grey-1": "#3e444b",
        whitesmoke: "#f1f6f6",
        dashboard: "#eef0f2",
        sandybrown: {
          "100": "rgba(232, 162, 69, 0.4)",
          "200": "rgba(232, 162, 69, 0.6)",
        },
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        mont: "Mont",
        "nirmala-ui": "'Nirmala UI'",
        marmelad: "Marmelad",
        inter: "Inter",
        "secular-one": "'Secular One'",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        "5xs-5": "7.5px",
        "4xs-7": "8.7px",
        "3xl-2": "22.2px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "7xl": "26px",
      "45xl": "64px",
      "base-4": "15.4px",
      "7xl-7": "26.7px",
      xl: "20px",
      "mini-9": "14.9px",
      "lg-6": "18.6px",
      "17xl": "36px",
      "base-7": "16.7px",
      "52xl-8": "71.8px",
      "3xl": "22px",
      "51xl": "70px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

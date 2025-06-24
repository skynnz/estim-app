const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- agrega esta línea
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: ["class"],
  plugins: [heroui({
    "themes": {
    "light": {
      "colors": {
        "default": {
          "50": "#fafafa",
          "100": "#f2f2f3",
          "200": "#ebebec",
          "300": "#e3e3e6",
          "400": "#dcdcdf",
          "500": "#d4d4d8",
          "600": "#afafb2",
          "700": "#8a8a8c",
          "800": "#656567",
          "900": "#404041",
          "foreground": "#000",
          "DEFAULT": "#d4d4d8"
        },
        "primary": {
          "50": "#dffce6",
          "100": "#b3f9c3",
          "200": "#86f5a0",
          "300": "#59f17c",
          "400": "#2dee59",
          "500": "#00ea36",
          "600": "#00c12d",
          "700": "#009823",
          "800": "#006f1a",
          "900": "#004610",
          "foreground": "#000",
          "DEFAULT": "#00ea36"
        },
        "secondary": {
          "50": "#e4e7f8",
          "100": "#bfc5ee",
          "200": "#99a4e4",
          "300": "#7382db",
          "400": "#4e61d1",
          "500": "#283fc7",
          "600": "#2134a4",
          "700": "#1a2981",
          "800": "#131e5f",
          "900": "#0c133c",
          "foreground": "#fff",
          "DEFAULT": "#283fc7"
        },
        "success": {
          "50": "#e1fced",
          "100": "#b7f8d3",
          "200": "#8df4ba",
          "300": "#63efa0",
          "400": "#39eb87",
          "500": "#0fe76d",
          "600": "#0cbf5a",
          "700": "#0a9647",
          "800": "#076e34",
          "900": "#054521",
          "foreground": "#000",
          "DEFAULT": "#0fe76d"
        },
        "warning": {
          "50": "#fef4e4",
          "100": "#fce4bd",
          "200": "#fad497",
          "300": "#f9c571",
          "400": "#f7b54a",
          "500": "#f5a524",
          "600": "#ca881e",
          "700": "#9f6b17",
          "800": "#744e11",
          "900": "#4a320b",
          "foreground": "#000",
          "DEFAULT": "#f5a524"
        },
        "danger": {
          "50": "#fee1eb",
          "100": "#fbb8cf",
          "200": "#f98eb3",
          "300": "#f76598",
          "400": "#f53b7c",
          "500": "#f31260",
          "600": "#c80f4f",
          "700": "#9e0c3e",
          "800": "#73092e",
          "900": "#49051d",
          "foreground": "#000",
          "DEFAULT": "#f31260"
        },
        "background": "#ffffff",
        "foreground": "#000000",
        "content1": {
          "DEFAULT": "#ffffff",
          "foreground": "#000"
        },
        "content2": {
          "DEFAULT": "#f4f4f5",
          "foreground": "#000"
        },
        "content3": {
          "DEFAULT": "#e4e4e7",
          "foreground": "#000"
        },
        "content4": {
          "DEFAULT": "#d4d4d8",
          "foreground": "#000"
        },
        "focus": "#006FEE",
        "overlay": "#000000"
      }
    },
    "dark": {
      "colors": {
        "default": {
          "50": "#0d0d0e",
          "100": "#19191c",
          "200": "#26262a",
          "300": "#323238",
          "400": "#3f3f46",
          "500": "#65656b",
          "600": "#8c8c90",
          "700": "#b2b2b5",
          "800": "#d9d9da",
          "900": "#ffffff",
          "foreground": "#fff",
          "DEFAULT": "#3f3f46"
        },
        "primary": {
          "50": "#004610",
          "100": "#006f1a",
          "200": "#009823",
          "300": "#00c12d",
          "400": "#00ea36",
          "500": "#2dee59",
          "600": "#59f17c",
          "700": "#86f5a0",
          "800": "#b3f9c3",
          "900": "#dffce6",
          "foreground": "#000",
          "DEFAULT": "#00ea36"
        },
        "secondary": {
          "50": "#0c133c",
          "100": "#131e5f",
          "200": "#1a2981",
          "300": "#2134a4",
          "400": "#283fc7",
          "500": "#4e61d1",
          "600": "#7382db",
          "700": "#99a4e4",
          "800": "#bfc5ee",
          "900": "#e4e7f8",
          "foreground": "#fff",
          "DEFAULT": "#283fc7"
        },
        "success": {
          "50": "#054521",
          "100": "#076e34",
          "200": "#0a9647",
          "300": "#0cbf5a",
          "400": "#0fe76d",
          "500": "#39eb87",
          "600": "#63efa0",
          "700": "#8df4ba",
          "800": "#b7f8d3",
          "900": "#e1fced",
          "foreground": "#000",
          "DEFAULT": "#0fe76d"
        },
        "warning": {
          "50": "#4a320b",
          "100": "#744e11",
          "200": "#9f6b17",
          "300": "#ca881e",
          "400": "#f5a524",
          "500": "#f7b54a",
          "600": "#f9c571",
          "700": "#fad497",
          "800": "#fce4bd",
          "900": "#fef4e4",
          "foreground": "#000",
          "DEFAULT": "#f5a524"
        },
        "danger": {
          "50": "#49051d",
          "100": "#73092e",
          "200": "#9e0c3e",
          "300": "#c80f4f",
          "400": "#f31260",
          "500": "#f53b7c",
          "600": "#f76598",
          "700": "#f98eb3",
          "800": "#fbb8cf",
          "900": "#fee1eb",
          "foreground": "#000",
          "DEFAULT": "#f31260"
        },
        "background": "#000000",
        "foreground": "#ffffff",
        "content1": {
          "DEFAULT": "#18181b",
          "foreground": "#fff"
        },
        "content2": {
          "DEFAULT": "#27272a",
          "foreground": "#fff"
        },
        "content3": {
          "DEFAULT": "#3f3f46",
          "foreground": "#fff"
        },
        "content4": {
          "DEFAULT": "#52525b",
          "foreground": "#fff"
        },
        "focus": "#006FEE",
        "overlay": "#ffffff"
      }
    }
  },
  "layout": {
    "disabledOpacity": "0.4"
  },
  }), require("tailwindcss-animate")],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-default-default": "#d9d9d9",
        "background-default-default": "#fff",
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.67)",
          "200": "rgba(255, 255, 255, 0.95)",
          "300": "rgba(0, 0, 0, 0.62)",
        },
        orangered: "rgba(242, 85, 17, 0.5)",
        darkorange: "rgba(255, 145, 46, 0.5)",
        deeppink: "rgba(244, 28, 178, 0.5)",
        "text-default-secondary": "#757575",
        "icon-default-tertiary": "#b3b3b3",
        "text-default-default": "#1e1e1e",
        "colour-main-blue-300": "#929ecc",
        "colour-main-blue-800": "#111b47",
        "colour-logo-primary": "#2246e3",
        "text-neutral-default": "#303030",
        blueviolet: "#9747ff",
        whitesmoke: "rgba(240, 240, 240, 0.5)",
      },
      spacing: {
        "space-200": "8px",
        "space-400": "16px",
        "space-300": "12px",
      },
      fontFamily: {
        subtitle: "Inter",
        "medium-12": "Roboto",
        "bakbak-one": "'Bakbak One'",
        buenard: "Buenard",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
        "radius-200": "8px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "5xl": "24px",
      base: "16px",
      xl: "20px",
      sm: "14px",
      xs: "12px",
      "7xl": "26px",
      "109xl": "128px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

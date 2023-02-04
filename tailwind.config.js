/** @type {import('tailwindcss').Config} */
const rem = (px) => `${px / 16}rem`;

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
      },
      fontWeight: {
        body: 500,
        heading: "bold",
        bold: 700,
      },
      fontSize: {
        xxs: rem(12),
        xs: rem(14),
        sm: rem(18),
        base: rem(20),
        l: rem(24),
        xl: rem(34),
        "2xl": rem(40),
        "3xl": rem(64),
        "4xl": rem(96),
      },
      lineHeight: {
        body: 1.56,
        heading: 1.06,
        loose: 2,
        none: 1,
      },
      colors: {
        primary: "#d2451e",
        background: "#fff",
        text: "#000",
        light1: "#f2f2f2",
        light2: "#f0f0f0",
        lightGrey: "#bebebe",
        darkRed: "#993921",
      },
      boxShadow: {
        members: "0 10px 20px rgba(0, 0, 0, 0.2)",
      },
      debugScreens: {
        style: {
          backgroundColor: "red",
          // color: "black",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};

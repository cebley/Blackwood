/** @type {import('tailwindcss').Config} */
// import { rem } from "polished";

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
      },
      fontWeight: {
        body: 400,
        heading: "bold",
        bold: 700,
      },
      // fontSize: {
      //   xxs: rem(`12px`),
      //   xs: rem(`14px`),
      //   sm: rem(`18px`),
      //   base: rem(`20px`),
      //   l: rem(`24px`),
      //   xl: rem(`34px`),
      //   "2xl": rem(`40px`),
      //   "3xl": rem(`64px`),
      //   "4xl": rem(`96px`),
      // },
      lineHeight: {
        body: 1.56,
        heading: 1.06,
        loose: 2,
        none: 1,
      },
      // colors: {
      //   primary: "#d2451e",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

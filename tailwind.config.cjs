/** @type {import('tailwindcss').Config} */
const rem = (px) => `${px / 16}rem`;

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: "'Untitled Sans', sans-serif",
        heading: "'ABC Diatype', sans-serif",
        subheading: "'ABC Whyte Inktrap', sans-serif",
      },
      fontWeight: {
        body: 400,
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
        // Blackwood brand v1.0 (May 2026) — see brand book §3.1
        primary: "#FC9B1E", // Sunset
        background: "#FDF3E8", // Cream
        text: "#141213", // Char
        black: "#141213", // remap pure black -> Char (no pure #000 in the brand)
        char: "#141213", // Char (dark sections)
        lightChar: "#221F20",
        sunset: "#FC9B1E",
        glacialBlue: "#C0D2FB",
        slate: "#4F4F4F",
        caution: "#FF7C30",
        warning: "#B8300A",
        light1: "#f2f2f2",
        light2: "#f0f0f0",
        lightGrey: "#bebebe",
        darkRed: "#B8300A", // remapped to Warning (legacy token kept for existing refs)
      },
      boxShadow: {
        members: "0 10px 20px rgba(0, 0, 0, 0.2)",
      },
      typography: {
        DEFAULT: {
          css: {
            li: {
              listStyle: "revert",
            },
          },
        },
      },
      debugScreens: {
        style: {
          backgroundColor: "red",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};

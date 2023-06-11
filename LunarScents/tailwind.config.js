/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "hsl(210,57%,78%)",
        Secondary: "hsl(335,77%,88%)",
        Tertiary: "hsl(36,100%,28%)",
        TertiaryHL: "hsl(41,70%,50%)",
        Page: "hsl(0,0%,100%)",
      },
      fontFamily: {
        FlyMe: "FlyMeToTheMoon",
        Delicate: "DelicateSans",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
      },
      colors: {
        "krem-aja": "#F4EEA9",
        "coklat-krem": "#F0BB62",
        "ijo-muda": "#519259",
        "ijo-tua": "#064635",
      },
      fontFamily: {
        jakartalight: "jakartaLight",
        jakartaregular: "jakartaRegular",
        jakartamedium: "jakartaMedium",
        jakartabold: "jakartaBold",
      },
    },
  },
  plugins: [],
};

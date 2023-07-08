module.exports = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss"),
    require("cssnano"),
    require("postcss-font-magician")({
      display: "swap",
      variants: {
        Raleway: {
          300: ["eot, woff2"],
        },
      },
      foundries: ["google"],
    }),
  ],
}

const config = {
  presets: [
    "@babel/preset-env",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
  ]
};
if (process.env.NODE_ENV === "production") {
  config.presets.push(
    [
      "minify",
      {
        removeConsole: true
      }
    ]
  )
}
module.exports = config;
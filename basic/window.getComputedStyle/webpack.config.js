const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/index.js", "./src/index.css"],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin(Object.keys(process.env)),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

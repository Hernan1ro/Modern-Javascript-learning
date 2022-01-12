const path = require("path");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "/"),
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

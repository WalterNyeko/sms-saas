const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: __dirname,
  entry: "./frontend/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "env", "es2015"],
          plugins: ["transform-class-properties"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "source-map",
  plugins: [new Dotenv()]
};

const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: ["babel-polyfill", "./frontend/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "env", "es2015", "stage-2"],
          plugins: [
            "transform-class-properties",
            "babel-plugin-transform-object-rest-spread"
          ]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "source-map",
  plugins: [new Dotenv()]
};

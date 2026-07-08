/**
 * This file contains the common webpack configuration for both development
 * and production.
 */

const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
  entry: {
    background: path.join(srcDir, "background", "background.ts"),
    popup: path.join(srcDir, "popup", "popup.ts"),
    saveItems: path.join(srcDir, "features", "saveItems", "saveItems.ts"),
    content: path.join(srcDir, "content", "content.ts"),
    spotlight: path.join(srcDir, "features", "spotlight", "spotlight.ts"),
    deactivateSpotlight: path.join(
      srcDir,
      "features",
      "spotlight",
      "deactivateSpotlight.ts"
    ),
    deactivateShortcuts: path.join(
      srcDir,
      "features",
      "shortcuts",
      "deactivateShortcuts.ts"
    ),
    deactivateGreenboard: path.join(
      srcDir,
      "features",
      "greenboard",
      "deactivateGreenboard.ts"
    ),
    greenboard: path.join(srcDir, "features", "greenboard", "greenboard.ts"),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return chunk.name !== "background";
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {},
    }),
  ],
};

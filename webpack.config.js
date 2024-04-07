import { HtmlWebpackPlugin } from "html-webpack-plugin";
import { path } from "path";

module.exports = {
  entry: "./src/App.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};

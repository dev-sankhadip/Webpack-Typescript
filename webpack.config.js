const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
  devtool: "eval-source-map",
  devServer: {
       contentBase: './public',
       hot:true,
  },
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  mode:'development',
};

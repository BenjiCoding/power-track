const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  devtool: "source-map",
  entry: {
    ProjetForm: "./src/code/Projet/Form/ProjetForm.ts",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "maps/[name].js.map",
    path: path.resolve(__dirname, "./src/Webresources/js"),
    library: ["pt"],
    libraryTarget: "var",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      fix: true,
      extensions: ["ts", "tsx"],
      lintDirtyModulesOnly: true,
      failOnError: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};

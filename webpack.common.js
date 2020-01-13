const path = require("path"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");



const options = {
  entry: __dirname + "/src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      filename: 'index.html',
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new MiniCssExtractPlugin(),
  ]
};

module.exports = options;
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const options = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contentHash].js"
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

module.exports = merge(common, options);

const path = require("path")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  entry: {
    app: "./src/app.js"
    // bjs: './src/bjs.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  }
}

const HTMLWebpackPlugin = require("html-webpack-plugin");

/**
 * @type import("webpack").Configuration
 */

const config = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname.concat("/dist"),
    filename: "[name].bundle.js",
    clean: true,
    pathinfo: false,
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    static: __dirname.concat("/dist"),
    open: true,
    client: {
      overlay: false,
      reconnect: false,
    }
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    }
  }
}

module.exports = config;
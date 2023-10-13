const HTMLWebpackPlugin = require("html-webpack-plugin");

/**
 * @type import("webpack").Configuration
 */

const config = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname.concat("/dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  mode: "production",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html"
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
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      minSize: 0,
      chunks: "all",
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)/,
          priority: 1,
          name: "react",
          chunks: "initial"
        }
      }
    }
  }
}

module.exports = config;
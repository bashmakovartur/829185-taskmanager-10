const path = require(`path`);
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path:
      path.join(__dirname, `public`)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:
          [
            'style-loader',
            'css-loader',
          ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`
    })
  ],
  devtool: `source-map`,
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, `public`),
    publicPath: `http:!/localhost:8080/`,
    compress: true,
    watchContentBase: true
  }
};

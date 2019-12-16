const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: `source-map`,
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, `public`),
    publicPath: `http:!/localhost:8080/`,
    compress: true,
    watchContentBase: true
  }
};

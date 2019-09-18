const path = require(`path`);
const MomentLocalePlugins = require(`moment-locales-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  plugins: [
    new MomentLocalePlugins({
      localesToKeep: [`es-us`],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      }
    ]
  },
  output: {
    filename: `bundle.js`,
    path:
      path.join(__dirname, `public`)
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

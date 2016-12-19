const larry = {
  // context: __dirname + "/client",
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "webpack-bundle.js",
    publicPath: "/static/",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        include: __dirname,

        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }],
  //     {
  //       test:/\.scss$/,
  //       loaders: ["style-loader", "css-loader", "sass-loader"]
  //     }
  //   ]
  // },
  // devServer: {
  //   hot: true,
  //   colors: true,
  //   // contentBase: './build',
  //   historyApiFallback: true,
  //   inline: true,
  //   progress: true
  }
}

module.exports = larry;
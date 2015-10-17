module.exports = {
  entry: ["./js/vendor/prism.js", "./js/app.js", "./css/base.scss"],
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?|\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          optional: ["es7.classProperties"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  }
};

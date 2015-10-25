module.exports = {
  entry: ["./js/app.js"],
  output: {
    path: __dirname + "/js",
    filename: "build/bundle.js"
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
      }
    ]
  }
};

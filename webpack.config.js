var path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "out"),
    filename: "build.js",
    library: "webUI"
  },
  module: {
    rules: [{ test: /\.(fs|fsproj)$/, use: "fable-loader" }]
  }
};

module.exports = {
  entry: {
    app: './app/index'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loaders: ['vue-html-loader']
    }, {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};

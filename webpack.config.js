module.exports = {
  entry: {
    app: './app/components/HelloWorld/index'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};

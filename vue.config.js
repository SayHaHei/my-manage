module.exports = {
  devServer: {
    port: 3333,
    open: true
  },
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "@/assets/scss/_variable.less";`
      }
    }
  }
};

module.exports = {
  devServer: {
    overlay: true,
    open: true,
    proxy: {
      '^/api': {
        target: 'https://aw-conta-api.herokuapp.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};

module.exports = {
  // proxy all requests starting with /api to jsonplaceholder
  '/api': {
    target: 'http://10.16.96.66:3030',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}

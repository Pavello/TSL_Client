const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../TSL_Server/public'),
  devServer: {
    proxy: "http://localhost:3000"
  }
}

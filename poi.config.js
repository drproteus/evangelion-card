const path = require('path')
const OfflinePlugin = require('offline-plugin')
const pkg = require('./package')

module.exports = options => ({
  entry: 'src/index.js',
  html: {
    title: pkg.productName,
    description: pkg.description
  },
  presets: [
    require('poi-preset-offline')()
  ]
})

const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@constants': path.resolve(__dirname, 'src/constants')
  })
)

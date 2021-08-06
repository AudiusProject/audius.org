const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/img'),
  i18n: {
    locales: ['en-US', 'zh', 'es'],
    defaultLocale: 'en-US'
  }
})

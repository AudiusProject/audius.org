const withReactSvg = require('next-react-svg')
const path = require('path')

const DEFAULT_LOCALE = 'en'

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/img'),
  async redirects() {
    return [
      // Root: redirect to default (English) locale home
      { source: '/', destination: `/${DEFAULT_LOCALE}/home`, permanent: false },
      // Locale root without path: redirect to home
      { source: '/en', destination: '/en/home', permanent: false },
      { source: '/zh', destination: '/zh/home', permanent: false },
      { source: '/es', destination: '/es/home', permanent: false }
    ]
  }
})

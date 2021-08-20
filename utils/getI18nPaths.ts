import i18nConfig from '../next-i18next.config'

const getI18nPaths = () =>
  i18nConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng
    }
  }))

export default getI18nPaths

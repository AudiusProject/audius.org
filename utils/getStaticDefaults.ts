import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import getI18nPaths from 'utils/getI18nPaths'

import i18nextConfig from '../next-i18next.config'

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(
        ctx.params.locale,
        ['common'],
        i18nextConfig
      ))
    }
  }
}

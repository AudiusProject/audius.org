import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import i18nextConfig from '../next-i18next.config'

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations(
        'en',
        ['common', 'people', 'apps'],
        i18nextConfig
      ))
    }
  }
}

const NotFound = () => {
  return (
    <div className='home'>
      <div id='intro'>
        <div className='header'>
          <h1>404 - Page Not Found</h1>
        </div>
      </div>
    </div>
  )
}

export default NotFound

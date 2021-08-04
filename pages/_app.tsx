import React from 'react'

import Head from 'next/head'

import { PageLayout } from 'components/PageLayout'

import 'css/style.min.css'
import 'css/style-global-changes.css'
import 'css/style-index-changes.css'

const MyApp = ({ Component, pageProps }) => (
  // TODO: add GTM

  <>
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      />
    </Head>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </>
)

export default MyApp

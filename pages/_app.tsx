import React from 'react'

import Head from 'next/head'
import Script from 'next/script'

import { PageLayout } from 'components/PageLayout'

// TODO: rename since it is no longer minified
import 'public/css/style.min.css'
import 'public/css/style-global-changes.css'
import 'public/css/style-index-changes.css'

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

    <Script
      src='https://code.jquery.com/jquery-3.3.1.min.js'
      integrity='sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8='
      crossOrigin='anonymous'
    />
    <Script>
      window.jQuery || document.write('
      <script src='/js/vendor/jquery-3.3.1.min.js'></script>')
    </Script>
    <Script src='/js/scripts.min.js'></Script>
  </>
)

export default MyApp

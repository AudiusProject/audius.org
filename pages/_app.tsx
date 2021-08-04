import React from 'react'

import Head from 'next/head'
import Script from 'next/script'

import { PageLayout } from 'components/PageLayout'

// TODO: rename since it is no longer minified
import 'public/css/style.min.css'
import 'public/css/style-global-changes.css'
import 'public/css/style-index-changes.css'
import 'public/css/style-mask-animation-fix.css'
import 'public/css/style-fixes-stakers.css'

const MyApp = ({ Component, pageProps }) => (
  // TODO: add GTM

  <>
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      />
      {/* Facebook */}

      <meta property='og:url' content='https://audius.org' />
      <meta property='og:type' content='product' />
      <meta property='og:title' content='Audius' />
      <meta
        property='og:description'
        content='Decentralized Audio Distribution, Attribution & Monetization'
      />
      <meta property='og:image' content='https://audius.org/img/og-image.png' />
    </Head>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>

    <script
      src='https://code.jquery.com/jquery-3.3.1.min.js'
      integrity='sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8='
      crossOrigin='anonymous'
    />
    {/* TODO: jquery fallback */}
    {/* <script>
      window.jQuery || document.write('
      <script src='/js/vendor/jquery-3.3.1.min.js'></script>')
    </script> */}
    <Script src='/js/scripts.min.js'></Script>
  </>
)

export default MyApp

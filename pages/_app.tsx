import React from 'react'

import Head from 'next/head'
import Script from 'next/script'

import { PageLayout } from 'components/PageLayout'

import 'public/styles/styles.scss'

import 'public/styles/mask-animation-fix.scss'

import 'public/styles/home-page.scss'
import 'public/styles/protocol-page.scss'
import 'public/styles/api-page.scss'
import 'public/styles/token-page.scss'

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
    <script src='/build/js/modernizr-custom.min.js'></script>
    <script src='/build/js/MorphSVGPlugin.min.js'></script>
    <script src='/build/js/TweenMax.min.js'></script>
    <Script src='/build/js/player.js'></Script>
    <Script src='/build/js/retina.js'></Script>
    <Script src='/build/js/main.js'></Script>
  </>
)

export default MyApp

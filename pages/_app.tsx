import React from 'react'

import Head from 'next/head'
import Script from 'next/script'

import { PageLayout } from 'components/PageLayout'

import 'public/css/style.min.css'
import 'public/css/style-global-changes.css'
import 'public/css/style-index-changes.css'
import 'public/css/style-mask-animation-fix.css'
import 'public/css/style-fixes-stakers.css'
import 'public/css/style-guitar-blocks.css'
import 'public/css/style-fixes-devs.css'

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
    <Script src='/build/js/modernizr-custom.min.js'></Script>
    <Script src='/build/js/MorphSVGPlugin.min.js'></Script>
    <Script src='/build/js/TweenMax.min.js'></Script>
    <Script src='/build/js/player.js'></Script>
    <Script src='/build/js/retina.js'></Script>
    <Script src='/build/js/main.js'></Script>
  </>
)

export default MyApp

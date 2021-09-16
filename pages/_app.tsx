import React, { useEffect } from 'react'

import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import TagManager from 'react-gtm-module'
import { useTransition, animated } from 'react-spring'

import PageLayout from 'components/PageLayout'
import init from 'public/js/main'

import 'public/styles/index.scss'

const tagManagerArgs = {
  gtmId: 'GTM-TTM6CHS',
  dataLayer: {
    js: new Date(),
    config: 'UA-120325397-4'
  }
}

const App = appWithTranslation(({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  const router = useRouter()

  useEffect(() => {
    // Reinit the animations/modals/etc found in main.js
    // (Hopefully we can migrate away from this eventually)
    init()
  }, [router.pathname])

  const transitions = useTransition(Component, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: {
      duration: 500
    }
  })

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
      </Head>
      <PageLayout>
        {transitions((styles, Component) => (
          <animated.div style={styles}>
            <Component {...pageProps} />
          </animated.div>
        ))}
      </PageLayout>

      <script src='/js/vendor/jquery-3.3.1.min.js'></script>
      <script src='/js/vendor/MorphSVGPlugin.min.js'></script>
      <script src='/js/vendor/TweenMax.min.js'></script>
      <Script src='/js/vendor/modernizr-custom.min.js'></Script>
    </>
  )
})

export default App

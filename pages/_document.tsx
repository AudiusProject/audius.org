import React from 'react'

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='description' content='' />

          {/* Icons */}

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/favicons/safari-pinned-tab.svg'
            color='#a116b7'
          />
          <link rel='shortcut icon' href='/favicons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-config'
            content='/favicons/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff' />

          {/* Facebook */}

          <meta property='og:url' content='https://audius.org' />
          <meta property='og:type' content='product' />
          <meta property='og:title' content='Audius' />
          <meta
            property='og:description'
            content='Decentralized Audio Distribution, Attribution & Monetization'
          />
          <meta
            property='og:image'
            content='https://audius.org/img/og-image.png'
          />

          {/* Fonts */}

          <link rel='stylesheet' href='https://use.typekit.net/ksb1lvi.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

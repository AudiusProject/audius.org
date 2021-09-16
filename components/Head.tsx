import React from 'react'

import NextHead from 'next/head'

type HeadProps = {
  description?: string
  path?: string
  title?: string
}

const Head = ({
  description = 'Decentralized Audio Distribution, Attribution & Monetization',
  path,
  title
}: HeadProps) => {
  const qualifiedTitle = title ? `${title} • Audius` : 'Audius'

  return (
    <NextHead>
      <title>{qualifiedTitle}</title>
      <meta property='og:type' content='product' />
      <meta
        property='og:url'
        content={`https://audius.org${path ?? ''}`}
        key={2}
      />
      <meta property='og:title' content={qualifiedTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://audius.org/img/og-image.png' />
    </NextHead>
  )
}

export default Head

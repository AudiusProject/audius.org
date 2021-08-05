import React from 'react'

type OpenGraphTagsProps = {
  description?: string
  path?: string
  title?: string
}

const OpenGraphTags = ({
  description = 'Decentralized Audio Distribution, Attribution & Monetization',
  path,
  title = 'Audius'
}: OpenGraphTagsProps) => {
  return (
    <>
      <meta property='og:url' content={`https://audius.org${path}`} />
      <meta property='og:type' content='product' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://audius.org/img/og-image.png' />
    </>
  )
}

export default OpenGraphTags

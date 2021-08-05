import React from 'react'

import Head from 'next/head'

import Intro from './Intro'
import Value from './Value'
import OpenGraphTags from 'components/OpenGraphTags'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Audius</title>
        <OpenGraphTags />
      </Head>

      <span className='parallax-sphere sphere orange' data-parallax='3'></span>
      <span
        className='parallax-sphere sphere orange-opaque'
        data-parallax='2'
      ></span>
      <span
        className='parallax-sphere sphere purple-glow'
        data-parallax='2'
      ></span>
      <span className='parallax-sphere sphere teal' data-parallax='2'></span>
      <span
        className='parallax-sphere sphere teal-opaque'
        data-parallax='3'
      ></span>
      <span
        className='parallax-sphere sphere purple one'
        data-parallax='3'
      ></span>
      <span
        className='parallax-sphere sphere purple two'
        data-parallax='2'
      ></span>

      <Intro />
      <Value />
    </div>
  )
}

export default HomePage

import React from 'react'

import Head from 'components/Head'

import Intro from './Intro'
import Value from './Value'

const Home = () => {
  return (
    <div className='home'>
      <Head />
      <Intro />
      <Value />

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
    </div>
  )
}

export default Home

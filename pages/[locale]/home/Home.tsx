import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import getI18nPaths from 'utils/getI18nPaths'

import i18nextConfig from '../../../next-i18next.config'

import Intro from './Intro'
import Value from './Value'

const Home = () => {
  return (
    <div className='home'>
      <Head>
        <title>Audius</title>
        <OpenGraphTags />
      </Head>
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

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await serverSideTranslations(
        ctx.params.locale,
        ['common', 'home'],
        i18nextConfig
      ))
    }
  }
}

export default Home

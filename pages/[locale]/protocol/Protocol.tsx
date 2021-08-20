import React from 'react'

import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'
import IconSquiggle from 'public/img/iconSquiggle.svg'

const Protocol = () => {
  return (
    <div className='protocol-page mask-animation-fix'>
      <Head>
        <title>Protocol</title>
        <OpenGraphTags title='Audius | Protocol' path='/protocol' />
      </Head>

      <SubpageIntro title='Protocol' />

      <section id='protocol-details'>
        <div className='content'>
          <div className='short-description'>
            <h2 className='interested'>
              Interested in operating a service on the Audius network?
            </h2>
          </div>
          <IconSquiggle />
          <div className='long-description'>
            <p className='stake'>
              Stake Audius tokens on your hosted service and earn revenue from
              the network.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  'https://github.com/AudiusProject/audius-protocol/wiki/Staking-Resources')
              }
              className='getting-started'
            >
              Getting Started Guide
            </button>
            <p className='wiki'>
              Check out our wiki for more information on how to get started
            </p>
          </div>

          <div className='dapp'>
            <div className='background'></div>
            <img
              src='/img/hedgehogLogoHorizontal.svg'
              className='hedgehogLogo'
              alt='Hedgehog logo'
            />
            <h3 className='building-header'>
              Building Your Own DApp? Use Audius Hedgehog
            </h3>
            <p className='building-description'>
              Hedgehog is an open-source, client-side Ethereum wallet that uses
              a username and password. Allow users to interact with your DApp
              just like they would any other website, no extensions required,
              without centralizing control of keys.
            </p>
            <button
              className='learn-more'
              onClick={() =>
                (window.location.href = 'https://hedgehog.audius.co/')
              }
            >
              Learn More
            </button>
          </div>

          <div className='contact'>
            <div className='background'></div>
            <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
              <img src='/img/newsletter-shapes.png' alt='' data-rjs='2' />
            </span>
            <h3 className='help'>
              Need support onboarding? We’re here to help.
            </h3>
            <div className='form-container'>
              <form
                id='mc-embedded-staker-form'
                name='mc-embedded-staker-form'
                className='validate'
                target='_blank'
                noValidate
              >
                <input
                  type='email'
                  value=''
                  name='EMAIL'
                  className='required email'
                  id='mce-EMAIL'
                  placeholder='Email'
                />
                <input
                  type='submit'
                  value='Submit'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='standard-button purple'
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Protocol

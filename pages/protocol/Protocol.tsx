import React from 'react'

import Head from 'next/head'
import SubpageIntro from 'components/SubpageIntro'

function ProtocolPage() {
  return (
    <div className='mask-animation-fix'>
      <Head>
        <title>Protocol</title>
      </Head>

      <SubpageIntro title='Protocol' />

      <section id='protocol-details'>
        <div className='content'>
          <div className='short-description'>
            <h2 className='interested'>
              Interested in operating a service on the Audius network?
            </h2>
          </div>
          <svg
            className='squiggle'
            aria-hidden='true'
            height='6.6'
            viewBox='0 0 46 6.6'
            width='46'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M46 6.6c-1.9 0-3.1-1.5-4.2-2.9s-2.1-2.7-3.8-2.7-2.7 1.3-3.8 2.7c-1.1 1.4-2.3 2.9-4.2 2.9-2.1 0-3.3-1.5-4.4-2.9-1-1.2-1.8-2.3-3.1-2.3s-2.4 1.1-3.5 2.3c-1.3 1.4-2.7 2.9-4.9 2.9s-3.6-1.1-4.9-2c-.9-.7-1.7-1.3-2.7-1.3-.7 0-1.2.2-1.8.4-1.1.4-2.3.9-4.7.9v-1c2.2 0 3.3-.4 4.3-.8.7-.3 1.3-.5 2.2-.5 1.3 0 2.3.7 3.3 1.5 1.1.9 2.3 1.8 4.2 1.8 1.8 0 2.9-1.3 4.2-2.6 1.2-1.3 2.4-2.6 4.2-2.6 1.8 0 2.9 1.3 3.9 2.7 1 1.3 2 2.5 3.6 2.5 1.4 0 2.4-1.2 3.4-2.5 1.2-1.5 2.5-3.1 4.7-3.1s3.5 1.6 4.6 3.1c1 1.3 2 2.5 3.4 2.5v1z' />
          </svg>
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

export default ProtocolPage

import React from 'react'

import { useTranslation } from 'next-i18next'

import Head from 'components/Head'
import SubpageIntro from 'components/SubpageIntro'
import IconSquiggle from 'public/img/iconSquiggle.svg'

const Protocol = () => {
  const { t } = useTranslation()

  return (
    <div className='protocol mask-animation-fix'>
      <Head title={t('navigation-protocol')} path='/protocol' />

      <SubpageIntro title={t('navigation-protocol')} />

      <section id='protocol-details'>
        <div className='content'>
          <div className='short-description'>
            <h2 className='interested'>{t('protocol-grabber')}</h2>
          </div>
          <IconSquiggle />
          <div className='long-description'>
            <p className='stake'>{t('protocol-call-to-action')}</p>
            <button
              onClick={() =>
                (window.location.href =
                  'https://github.com/AudiusProject/audius-protocol/wiki/Staking-Resources')
              }
              className='getting-started'
            >
              {t('protocol-getting-started')}
            </button>
            <p className='wiki'>{t('protocol-wiki')}</p>
          </div>

          <div className='dapp'>
            <div className='background'></div>
            <img
              src='/img/hedgehogLogoHorizontal.svg'
              className='hedgehogLogo'
              alt='Hedgehog logo'
            />
            <h3 className='building-header'>
              {t('protocol-hedgehog-call-to-action')}
            </h3>
            <p className='building-description'>
              {t('protocol-hedgehog-description')}
            </p>
            <button
              className='learn-more'
              onClick={() =>
                (window.location.href = 'https://hedgehog.audius.co/')
              }
            >
              {t('protocol-hedgehog-learn-more')}
            </button>
          </div>

          <div className='contact'>
            <div className='background'></div>
            <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
              <img src='/img/newsletter-shapes.png' alt='' data-rjs='2' />
            </span>
            <h3 className='help'>{t('protocol-onboarding')}</h3>
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

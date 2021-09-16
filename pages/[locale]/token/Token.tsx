import React from 'react'

import { useTranslation, Trans } from 'next-i18next'

import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import SubpageIntro from 'components/SubpageIntro'
import TokenAnimation from 'components/TokenAnimation'
import IconArrowDown from 'public/img/iconArrowDown.svg'

import WhitepaperCallout from './Whitepaper'

const Token = () => {
  const { t } = useTranslation()

  return (
    <div className='token'>
      <Head title={t('navigation-token')} path='/token' />

      <SubpageIntro title='Token' />

      <section id='top' className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <p>
                <Trans i18nKey='token-introduction'>
                  Introducing <em>$AUDIO</em>, The Audius Platform Token
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='dashboard-link' className='token-features'>
        <a
          className='standard-button purple'
          href='https://dashboard.audius.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('token-dashboard')}
        </a>
      </section>

      <section id='about' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('token-about-headline')}</h2>
          </div>
          <div className='content'>
            <p>{t('token-about-1')}</p>
            <p>{t('token-about-2')}</p>
            <p>{t('token-about-3')}</p>
          </div>
        </div>
      </section>

      <section id='dashboard-link' className='token-features'>
        <a
          className='standard-button purple'
          href='https://discord.gg/audius'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('token-discord')}
        </a>
      </section>

      <section id='audius' className='token-features'>
        <div className='container'>
          <div className='animations'>
            <div className='animation one'>
              <div id='token-audius-animation-1'>
                <div className='wave-1'>
                  <svg
                    className='wave'
                    aria-hidden='true'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='2033px'
                    height='289.3px'
                    viewBox='0 0 2033 289.3'
                  >
                    <path d='M0,0.6c169.4,0,169.4,270.1,338.8,270.1c169.4,0,169.4-255.6,338.8-255.6c169.4,0,169.4,231,338.8,231 c169.4,0,169.4-168.5,338.8-168.5c169.4,0,169.4,211,338.8,211c169.4,0,169.4-288.1,338.9-288.1' />
                  </svg>
                </div>
                <div className='wave-2'>
                  <svg
                    className='wave'
                    aria-hidden='true'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='2211.1px'
                    height='161.6px'
                    viewBox='0 0 2211.1 161.6'
                  >
                    <path d='M0,161.6c175.4,0,239.5-101.9,387.7-101.9c145.7,0,170,101.9,333.3,101.9C876.1,161.6,930.1,0,1105.5,0 s216.8,161.6,376.5,161.6c163.3,0,195.7-101.9,341.4-101.9c148.2,0,212.3,101.9,387.7,101.9' />
                  </svg>
                </div>
                <span className='seal'>
                  <img src='/img/platformToken@2x.png' data-rjs='2' alt='' />
                </span>
                <p>{t('token-stake-description')}</p>
              </div>
            </div>
            <TokenAnimation />
            <a className='page-scroll has-title teal' href='#audius-features'>
              <span>{t('token-stake')}</span>
              <IconArrowDown />
            </a>
          </div>
          <div id='audius-features' className='row two-columns'>
            <div className='column'>
              <div className='feature'>
                <div className='icon'>
                  <div>
                    <img
                      src='/img/iconNodes@2x.png'
                      alt='Icon for Nodes'
                      data-rjs='2'
                    />
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <b>{t('token-stake-reason-1')}</b>
                  </p>
                  <p>{t('token-stake-reason-1-description')}</p>
                </div>
              </div>
              <div className='feature'>
                <div className='icon'>
                  <div>
                    <img
                      src='/img/iconFeatures@2x.png'
                      alt='Icon for Features'
                      data-rjs='2'
                    />
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <b>{t('token-stake-reason-2')}</b>
                  </p>
                  <p>{t('token-stake-reason-2-description')}</p>
                </div>
              </div>
              <div className='feature'>
                <div className='icon'>
                  <div>
                    <img
                      src='/img/iconGov@2x.png'
                      alt='Icon for Gov'
                      data-rjs='2'
                    />
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <b>{t('token-stake-reason-2')}</b>
                  </p>
                  <p>{t('token-stake-reason-2-description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhitepaperCallout />
      <Newsletter />

      <span
        className='parallax-sphere sphere purple-glow'
        data-parallax='1'
      ></span>
      <span className='parallax-sphere sphere teal' data-parallax='1'></span>
      <span
        className='parallax-sphere sphere teal-opaque'
        data-parallax='2'
      ></span>
    </div>
  )
}

export default Token

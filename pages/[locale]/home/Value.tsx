import React from 'react'

import { useTranslation } from 'next-i18next'

import IconCreate from 'public/img/iconCreate.svg'
import IconPreexisting from 'public/img/iconPreexisting.svg'
import IconSquiggle from 'public/img/iconSquiggle.svg'

const Value = () => {
  const { t } = useTranslation()

  return (
    <section id='value'>
      <div className='container'>
        <header>
          <img
            src='/img/value-header.png'
            data-rjs='2'
            alt='Audius value graphic'
          />
          <h2>{t('home-value')}</h2>
        </header>
        <div className='row two-columns'>
          <div className='column'>
            <div className='animation'>
              <div id='value-distribution-animation'>
                <span className='network-lines one'>
                  <span className='line small one'></span>
                  <span className='line medium two'></span>
                  <span className='line large three'></span>
                  <span className='line medium four'></span>
                  <span className='line small five'></span>
                </span>
                <span className='network-lines two'>
                  <span className='line small one'></span>
                  <span className='line medium two'></span>
                  <span className='line large three'></span>
                  <span className='line medium four'></span>
                  <span className='line small five'></span>
                </span>
                <span className='network-lines three'>
                  <span className='line small one'></span>
                  <span className='line medium two'></span>
                  <span className='line large three'></span>
                  <span className='line medium four'></span>
                  <span className='line small five'></span>
                </span>
                <span className='network-lines four'>
                  <span className='line small one'></span>
                  <span className='line medium two'></span>
                  <span className='line large three'></span>
                  <span className='line medium four'></span>
                  <span className='line small five'></span>
                </span>
                <span className='clock one'>
                  <span className='lock'>
                    <img
                      src='/img/value-distribution-animation-lock.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <img
                    src='/img/value-distribution-animation-clock.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='clock two'>
                  <span className='lock'>
                    <img
                      src='/img/value-distribution-animation-lock.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <img
                    src='/img/value-distribution-animation-clock.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='clock three'>
                  <span className='lock'>
                    <img
                      src='/img/value-distribution-animation-lock.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <img
                    src='/img/value-distribution-animation-clock.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='clock four'>
                  <span className='lock'>
                    <img
                      src='/img/value-distribution-animation-lock.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <img
                    src='/img/value-distribution-animation-clock.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='clock five'>
                  <span className='lock'>
                    <img
                      src='/img/value-distribution-animation-lock.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <img
                    src='/img/value-distribution-animation-clock.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='clock six'>
                  <span className='lock'>
                    <img
                      src='/img/value-distribution-animation-lock.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <img
                    src='/img/value-distribution-animation-clock.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='bg'>
                  <img
                    src='/img/value-distribution-animation-bg.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='description orange'>
              <div className='header'>
                <div className='icon'>
                  <img
                    src='/img/value-distribution-icon.png'
                    alt=''
                    data-rjs='2'
                  />
                </div>
                <div className='title'>
                  <h3>{t('home-security-headline')}</h3>
                  <h4>{t('home-security-subtitle')}</h4>
                </div>
              </div>
              <IconSquiggle />
              <p>{t('home-security-description')}</p>
            </div>
          </div>
        </div>
        <div className='row two-columns'>
          <div className='column'>
            <div className='animation'>
              <div id='value-attribution-animation'>
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
                <span className='needle one'></span>
                <span className='needle two'></span>
                <span className='data'>
                  <span className='lines one'>
                    <img
                      src='/img/value-attribution-animation-data.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <span className='lines two'>
                    <img
                      src='/img/value-attribution-animation-data.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                </span>
                <span className='equalizer'>
                  <span>
                    <img
                      src='/img/value-attribution-animation-equalizer.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                </span>
                <span className='device'>
                  <img
                    src='/img/value-attribution-animation-device.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='arms'>
                  <img
                    src='/img/value-attribution-animation-arms.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='coin one'>
                  <span className='note'>
                    <img
                      src='/img/value-attribution-animation-note-one.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <span className='gold'>
                    <img
                      src='/img/value-attribution-animation-coin.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                </span>
                <span className='coin two'>
                  <span className='note'>
                    <img
                      src='/img/value-attribution-animation-note-two.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <span className='gold'>
                    <img
                      src='/img/value-attribution-animation-coin.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                </span>
                <span className='coin three'>
                  <span className='note'>
                    <img
                      src='/img/value-attribution-animation-note-three.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                  <span className='gold'>
                    <img
                      src='/img/value-attribution-animation-coin.png'
                      data-rjs='2'
                      alt=''
                    />
                  </span>
                </span>
                <span className='bg'>
                  <img
                    src='/img/value-attribution-animation-bg.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='description violet'>
              <div className='header'>
                <div className='icon'>
                  <img
                    src='/img/value-attribution-icon.png'
                    alt=''
                    data-rjs='2'
                  />
                </div>
                <div className='title'>
                  <h3>{t('home-features-headline')}</h3>
                  <h4>{t('home-features-subtitle')}</h4>
                </div>
              </div>
              <IconSquiggle />
              <p>{t('home-features-description')}</p>
            </div>
          </div>
        </div>
        <div className='row two-columns'>
          <div className='column'>
            <div className='animation'>
              <div id='value-monetization-animation'>
                <IconPreexisting />
                <IconCreate />
                <span className='document one'>
                  <img
                    src='/img/value-monetization-animation-document.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='document two'>
                  <img
                    src='/img/value-monetization-animation-document.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='document three'>
                  <img
                    src='/img/value-monetization-animation-document.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='document four'>
                  <img
                    src='/img/value-monetization-animation-document.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='mask-one one'>
                  <img
                    src='/img/value-monetization-animation-platform-mask-1.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='mask-one two'>
                  <img
                    src='/img/value-monetization-animation-platform-mask-1.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='mask-two'>
                  <img
                    src='/img/value-monetization-animation-platform-mask-2.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='bg'>
                  <img
                    src='/img/value-monetization-animation-bg.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='description teal'>
              <div className='header'>
                <div className='icon'>
                  <img
                    className='icon'
                    src='/img/value-monetization-icon.png'
                    alt=''
                    data-rjs='2'
                  />
                </div>
                <div className='title'>
                  <h3>{t('home-governance-headline')}</h3>
                  <h4>{t('home-governance-subtitle')}</h4>
                </div>
              </div>
              <IconSquiggle />
              <p>{t('home-governance-description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Value

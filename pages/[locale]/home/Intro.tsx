import React from 'react'

import { useTranslation } from 'next-i18next'

import { FadeImage } from 'components/FadeImage'

const Intro = () => {
  const { t } = useTranslation()

  return (
    <section id='intro'>
      <div className='header'>
        <div className='main-content'>
          <h2>{t('home-headline')}</h2>
          <div className='divider'></div>
          <div className='description'>
            <p>{t('home-subtitle')}</p>
          </div>
        </div>
        <div className='button-options'>
          <button
            onClick={() =>
              window.open('https://dashboard.audius.org', '_blank')
            }
            className='button dashboard'
          >
            {t('home-explore-dashboard')}
          </button>
          <button
            onClick={() => window.open('https://audius.co', '_blank')}
            className='button discord'
          >
            {t('home-visit-audius-music')}
          </button>
        </div>
      </div>
      <div className='animation'>
        <div id='intro-animation'>
          <span className='wave-bg'></span>
          <span className='bars-bg'>
            <span className='bars'></span>
          </span>
          <span className='scrubber'></span>
          <div className='wave-1'>
            <div className='wave-container'>
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
              <span className='dot one'>
                <span></span>
              </span>
              <span className='dot two'>
                <span></span>
              </span>
              <span className='dot three'>
                <span></span>
              </span>
            </div>
          </div>
          <div className='wave-2'>
            <div className='wave-container'>
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

              <span className='dot one'>
                <span></span>
              </span>
              <span className='dot two'>
                <span></span>
              </span>
              <span className='dot three'>
                <span></span>
              </span>
              <span className='dot four'>
                <span></span>
              </span>
            </div>
          </div>
          <div className='wave-3'>
            <div className='wave-container'>
              <svg
                className='wave'
                aria-hidden='true'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='2410px'
                height='66.2px'
                viewBox='0 0 2410 66.2'
              >
                <path d='M2410,58.1c-30.9,0-36.2-4.6-51.2-4.6c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-15.2-66.5-15.2 c-25,0-31.3,15.2-59.3,15.2c-27.4,0-33.8-37.4-63.9-37.4c-30.1,0-36.5,37.4-63.9,37.4c-28,0-34.3-15.2-59.3-15.2 c-25.4,0-36.4,15.2-66.5,15.2c-30.1,0-39.5-24.1-60.1-24.1c-14.9,0-20.3,16.7-51.2,16.7l-1,0c-30.9,0-36.2-4.6-51.2-4.6 c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-32.5-66.5-32.5c-25,0-31.3,32.5-59.3,32.5c-27.4,0-33.8-65-63.9-65 c-30.1,0-36.5,65-63.9,65c-28,0-34.3-32.5-59.3-32.5c-25.4,0-36.4,32.5-66.5,32.5c-30.1,0-39.5-12.1-60.1-12.1 c-14.9,0-20.3,4.6-51.2,4.6l-1,0c-30.9,0-36.2-4.6-51.2-4.6c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-15.2-66.5-15.2 c-25,0-31.3,15.2-59.3,15.2c-27.4,0-33.8-37.4-63.9-37.4c-30.1,0-36.5,37.4-63.9,37.4c-28,0-34.3-15.2-59.3-15.2 c-25.4,0-36.4,15.2-66.5,15.2c-30.1,0-39.5-24.1-60.1-24.1c-14.9,0-20.3,16.7-51.2,16.7l-1,0c-30.9,0-36.2-4.6-51.2-4.6 c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-32.5-66.5-32.5c-25,0-31.3,32.5-59.3,32.5c-27.4,0-33.8-65-63.9-65 c-30.1,0-36.5,65-63.9,65c-28,0-34.3-32.5-59.3-32.5c-25.4,0-36.4,32.5-66.5,32.5c-30.1,0-39.5-12.1-60.1-12.1 c-14.9,0-20.3,4.6-51.2,4.6' />
              </svg>
            </div>
          </div>
          <div className='wave-4'>
            <div className='wave-container'>
              <svg
                className='wave'
                aria-hidden='true'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='2410px'
                height='66.2px'
                viewBox='0 0 2410 66.2'
              >
                <path d='M2410,58.1c-30.9,0-36.2-4.6-51.2-4.6c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-15.2-66.5-15.2 c-25,0-31.3,15.2-59.3,15.2c-27.4,0-33.8-37.4-63.9-37.4c-30.1,0-36.5,37.4-63.9,37.4c-28,0-34.3-15.2-59.3-15.2 c-25.4,0-36.4,15.2-66.5,15.2c-30.1,0-39.5-24.1-60.1-24.1c-14.9,0-20.3,16.7-51.2,16.7l-1,0c-30.9,0-36.2-4.6-51.2-4.6 c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-32.5-66.5-32.5c-25,0-31.3,32.5-59.3,32.5c-27.4,0-33.8-65-63.9-65 c-30.1,0-36.5,65-63.9,65c-28,0-34.3-32.5-59.3-32.5c-25.4,0-36.4,32.5-66.5,32.5c-30.1,0-39.5-12.1-60.1-12.1 c-14.9,0-20.3,4.6-51.2,4.6l-1,0c-30.9,0-36.2-4.6-51.2-4.6c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-15.2-66.5-15.2 c-25,0-31.3,15.2-59.3,15.2c-27.4,0-33.8-37.4-63.9-37.4c-30.1,0-36.5,37.4-63.9,37.4c-28,0-34.3-15.2-59.3-15.2 c-25.4,0-36.4,15.2-66.5,15.2c-30.1,0-39.5-24.1-60.1-24.1c-14.9,0-20.3,16.7-51.2,16.7l-1,0c-30.9,0-36.2-4.6-51.2-4.6 c-20.6,0-30,12.1-60.1,12.1c-30.1,0-41.1-32.5-66.5-32.5c-25,0-31.3,32.5-59.3,32.5c-27.4,0-33.8-65-63.9-65 c-30.1,0-36.5,65-63.9,65c-28,0-34.3-32.5-59.3-32.5c-25.4,0-36.4,32.5-66.5,32.5c-30.1,0-39.5-12.1-60.1-12.1 c-14.9,0-20.3,4.6-51.2,4.6' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro

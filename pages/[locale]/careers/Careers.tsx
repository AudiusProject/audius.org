import React from 'react'

import { useTranslation } from 'next-i18next'

import Head from 'components/Head'
import Link from 'components/Link'
import SubpageIntro from 'components/SubpageIntro'

const Careers = () => {
  const { t } = useTranslation()

  return (
    <div className='careers mask-animation-fix'>
      <Head
        title={t('navigation-careers')}
        path='/careers'
        description='Want to help empower artists across the globe?'
      />

      <SubpageIntro title={t('navigation-careers')} showDivider />

      <section id='who-we-are' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('careers-headline')}</h2>
          </div>
          <div className='content'>
            <p>{t('careers-about-1')}</p>
            <p>{t('careers-about-2')}</p>
            <p>{t('careers-about-3')}</p>
          </div>
        </div>
      </section>

      <section id='team-images'>
        <div className='col1'>
          <div className='imageWrapper'>
            <img src='/img/Team1.jpg' alt='Photo of Audius team' />
          </div>
          <div className='imageWrapper'>
            <img src='/img/Team3.jpg' alt='Photo of Audius team' />
          </div>
          <div className='imageWrapper'>
            <img src='/img/Team5.jpg' alt='Photo of Audius team' />
          </div>
        </div>
        <div className='col2'>
          <div className='imageWrapper'>
            <img src='/img/Team2.jpg' alt='Photo of Audius team' />
          </div>
          <div className='imageWrapper'>
            <img src='/img/Team4.jpg' alt='Photo of Audius team' />
          </div>
        </div>
      </section>

      <section className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <h3>{t('team-join')}</h3>
              <p>{t('team-mission')}</p>
            </div>
            <a
              className='standard-button purple'
              href='https://jobs.lever.co/audius'
              target='_blank'
              rel='noreferrer'
            >
              {t('careers-listings')}
            </a>
          </div>
        </div>
      </section>

      <section id='about-the-company' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('careers-description-headline')}</h2>
          </div>
          <div className='content'>
            <p>{t('careers-description-1')}</p>
            <p>{t('careers-description-2')}</p>
          </div>
          <Link href='/team'>
            <a className='standard-button purple'>{t('careers-team')}</a>
          </Link>
        </div>
      </section>

      <section id='newsletter'>
        <div className='container'>
          <div className='content'>
            <div className='header'>
              <h3>{t('careers-launch-app-headline')}</h3>
              <button
                className='learn-more'
                onClick={() => (window.location.href = 'https://audius.co/')}
              >
                {t('careers-launch-app')}
              </button>
            </div>
          </div>
        </div>
        <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
          <img
            src='/img/newsletter-shapes.png'
            alt='Audius newsletter graphic'
            data-rjs='2'
          />
        </span>
      </section>

      <span className='parallax-sphere sphere orange' data-parallax='3'></span>
      <span
        className='parallax-sphere sphere orange-opaque'
        data-parallax='1'
      ></span>
      <span
        className='parallax-sphere sphere purple-glow'
        data-parallax='2'
      ></span>
      <span className='parallax-sphere sphere teal' data-parallax='5'></span>
      <span
        className='parallax-sphere sphere teal-opaque'
        data-parallax='6'
      ></span>
    </div>
  )
}

export default Careers

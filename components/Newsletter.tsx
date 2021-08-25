import React from 'react'

import { useTranslation } from 'next-i18next'

const Newsletter = () => {
  const { t } = useTranslation()
  return (
    <div>
      <section id='newsletter'>
        <div className='container'>
          <div className='content'>
            <div className='header'>
              <h3>{t('newsletter-headline')}</h3>
              <p>{t('newsletter-subtitle')}</p>
            </div>
            <form
              action='https://Audius.us18.list-manage.com/subscribe/post?u=f351897a27ff0a641b8acd9ab&amp;id=f064864764'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
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
        <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
          <img
            src='/img/newsletter-shapes.png'
            alt='Audius newsletter graphic'
            data-rjs='2'
          />
        </span>
      </section>
    </div>
  )
}

export default Newsletter

import React from 'react'

import { useTranslation } from 'next-i18next'

const Whitepaper = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <p>{t('whitepaper-learn-more')}</p>
            </div>
            <a
              className='standard-button purple'
              href='https://whitepaper.audius.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('whitepaper-read')}
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

export default Whitepaper

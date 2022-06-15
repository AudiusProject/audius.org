import React from 'react'

import { useTranslation } from 'next-i18next'

import { FadeImage } from 'components/FadeImage'

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

      <section id='distribution' className='bios'>
        <div className='container'>
          <div className='content'>
            <FadeImage src='../img/circulatingSupply@2x.png' alt='distribution' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Whitepaper

import React from 'react'

import { useTranslation } from 'next-i18next'

import { FadeImage } from './FadeImage'

const Investors = () => {
  const { t } = useTranslation()

  return (
    <section id='investors'>
      <div className='container'>
        <div className='header'>
          <h2>{t('team-investors-headline')}</h2>
        </div>
        <div className='logos'>
          <ul>
            <li>
              <FadeImage
                className='coinbase'
                src='/img/logoCoinbase.svg'
                alt='Coinbase'
              />
              <span>Coinbase</span>
            </li>
            <li>
              <FadeImage
                className='blockchange'
                src='/img/logoBlockChange@2x.png'
                alt='Block Change'
              />
              <span>Block Change</span>
            </li>
            <li>
              <FadeImage
                className='general'
                src='/img/general-catalyst.svg'
                alt='General Catalyst'
              />
              <span>General Catalyst</span>
            </li>
            <li>
              <FadeImage
                className='kpcb'
                src='/img/kleiner-perkins-caufield-byers.png'
                data-rjs='2'
                alt='Kleiner Perkins Caufield Byers'
              />
              <span>Kleiner Perkins Caufield Byers</span>
            </li>
          </ul>
        </div>
        <div className='logos'>
          <ul>
            <li>
              <FadeImage
                className='lightspeed'
                src='/img/lightspeed.svg'
                alt='Lightspeed'
              />
              <span>Lightspeed</span>
            </li>
            <li>
              <FadeImage
                className='multicoin'
                src='/img/logoMulticoinCapital.svg'
                alt='Multicoin'
              />
              <span>Multicoin Capital</span>
            </li>
            <li>
              <FadeImage className='pantera' src='/img/pantera.png' alt='Pantera' />
              <span>Pantera</span>
            </li>
            <li>
              <FadeImage
                className='standard'
                src='/img/logoSandardCrypto.svg'
                alt='Standard Crypto'
              />
              <span>Standard Crypto</span>
            </li>
          </ul>
        </div>
        <div className='logos'>
          <ul>
            <li className='last-item'>
              <FadeImage
                className='binance'
                src='/img/logoBinance.png'
                alt='Binance'
              />
              <span>Binance</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Investors

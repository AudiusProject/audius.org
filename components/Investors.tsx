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
                src='/FadeImage/logoCoinbase.svg'
                alt='Coinbase'
              />
              <span>Coinbase</span>
            </li>
            <li>
              <FadeImage
                className='blockchange'
                src='/FadeImage/logoBlockChange@2x.png'
                alt='Block Change'
              />
              <span>Block Change</span>
            </li>
            <li>
              <FadeImage
                className='general'
                src='/FadeImage/general-catalyst.svg'
                alt='General Catalyst'
              />
              <span>General Catalyst</span>
            </li>
            <li>
              <FadeImage
                className='kpcb'
                src='/FadeImage/kleiner-perkins-caufield-byers.png'
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
                src='/FadeImage/lightspeed.svg'
                alt='Lightspeed'
              />
              <span>Lightspeed</span>
            </li>
            <li>
              <FadeImage
                className='multicoin'
                src='/FadeImage/logoMulticoinCapital.svg'
                alt='Multicoin'
              />
              <span>Multicoin Capital</span>
            </li>
            <li>
              <FadeImage className='pantera' src='/FadeImage/pantera.png' alt='Pantera' />
              <span>Pantera</span>
            </li>
            <li>
              <FadeImage
                className='standard'
                src='/FadeImage/logoSandardCrypto.svg'
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
                src='/FadeImage/logoBinance.png'
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

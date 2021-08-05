import React from 'react'

const Investors = () => {
  return (
    <section id='investors'>
      <div className='container'>
        <div className='header'>
          <h2>Investors</h2>
        </div>
        <div className='logos'>
          <ul>
            <li>
              <img
                className='coinbase'
                src='/img/logoCoinbase.svg'
                alt='Coinbase'
              />
              <span>Coinbase</span>
            </li>
            <li>
              <img
                className='blockchange'
                src='/img/logoBlockChange@2x.png'
                alt='Block Change'
              />
              <span>Block Change</span>
            </li>
            <li>
              <img
                className='general'
                src='/img/general-catalyst.svg'
                alt='General Catalyst'
              />
              <span>General Catalyst</span>
            </li>
            <li>
              <img
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
              <img
                className='lightspeed'
                src='/img/lightspeed.svg'
                alt='Lightspeed'
              />
              <span>Lightspeed</span>
            </li>
            <li>
              <img
                className='multicoin'
                src='/img/logoMulticoinCapital.svg'
                alt='Multicoin'
              />
              <span>Multicoin Capital</span>
            </li>
            <li>
              <img className='pantera' src='/img/pantera.png' alt='Pantera' />
              <span>Pantera</span>
            </li>
            <li>
              <img
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
              <img
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

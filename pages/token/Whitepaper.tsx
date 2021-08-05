import React from 'react'

const Whitepaper = () => {
  return (
    <>
      <section className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <p>Want to learn more?</p>
            </div>
            <a
              className='standard-button purple'
              href='https://whitepaper.audius.co'
              target='_blank'
              rel='noopener'
            >
              Read the Whitepaper
            </a>
          </div>
        </div>
      </section>

      <section id='distribution' className='bios'>
        <div className='container'>
          <div className='content'>
            <img src='../img/circulatingSupply@2x.png' alt='distribution' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Whitepaper

import React, { useEffect } from 'react'

import Footer from 'components/Footer'

export const PageLayout: React.FC = ({ children }) => {
  useEffect(() => {
    const seen = window.localStorage.getItem('securities-notice-seen')
    if (!seen) {
      // TODO: use a ref instead
      const el = document.getElementById('trigger-popup')
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((json) => {
          if (json.country === 'US') {
            el.click()
          }
        })
        .catch((e) => {
          console.error(e)
          el.click()
        })
    }
  }, [])

  return (
    <div>
      <button id='menu-button' className='mobile-only'>
        <svg
          className='squiggle'
          aria-hidden='true'
          viewBox='0 0 28.1 5.4'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M28.1 5.4c-1.5 0-2.4-1.1-3.1-2-.7-.9-1.1-1.4-1.8-1.4s-1.1.5-1.8 1.4c-.7.9-1.6 2-3.1 2-1.6 0-2.5-1.1-3.2-2-.6-.7-.9-1.1-1.4-1.1-.5 0-1 .5-1.6 1.2-.8.9-1.9 2-3.5 2-1.6-.1-2.7-.9-3.4-1.4-.6-.5-.9-.7-1.3-.7-.3 0-.5.1-.9.2-.6.3-1.4.6-3 .6v-2c1.2 0 1.8-.2 2.4-.4.5-.2.9-.3 1.6-.3 1-.1 1.8.5 2.4 1 .7.5 1.3.9 2.2.9.7 0 1.3-.5 2.1-1.4.8-.8 1.7-1.8 3.1-1.8 1.4 0 2.3 1 2.9 1.9.6.8 1 1.3 1.6 1.3.5 0 .9-.5 1.6-1.3.8-1 1.7-2.2 3.4-2.2s2.6 1.2 3.4 2.2c.6.8 1 1.3 1.6 1.3v2z' />
        </svg>
        <svg
          className='close-menu'
          aria-hidden='true'
          height='13.6'
          viewBox='0 0 13.6 13.6'
          width='13.6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.6 2l-2-2-4.8 4.8-4.8-4.8-2 2 4.8 4.8-4.8 4.8 2 2 4.8-4.8 4.8 4.8 2-2-4.8-4.8z' />
        </svg>
        <span>Show/Hide Main Menu</span>
      </button>

      <header className='main-header'>
        <h1 className='logo'>
          <a href='/'>
            <img src='/img/audius.png' data-rjs='2' alt='Audius' />
            <span>Audius</span>
          </a>
        </h1>
        <nav className='menu'>
          <div>
            <ul>
              <li className='mobile-only'>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/protocol/'>Protocol</a>
              </li>
              <li>
                <a href='/api/' className='active'>
                  API
                </a>
              </li>
              <li>
                <a href='/token/'>Token</a>
              </li>
              <li>
                <a href='/team/'>Team</a>
              </li>
              <li>
                <a href='/careers/'>Careers</a>
              </li>
              <li>
                <a
                  className='standard-button purple'
                  href='https://whitepaper.audius.co/'
                  target='_blank'
                  rel='noopener'
                >
                  White Paper
                </a>
              </li>
            </ul>
          </div>
          <span className='bg-shapes'>
            <span></span>
          </span>
        </nav>
      </header>

      <main>
        <div id='video-modal' className='modal' aria-hidden='true'>
          <div
            className='modal-container'
            style={{
              maxWidth: 720,
              background: '#ffffff',
              boxShadow: '0px 16px 20px rgba(133, 129, 153, 0.15)',
              borderRadius: 12
            }}
          >
            <div className='modal-frame'>
              <div
                id='securities-notice'
                style={{ textAlign: 'center', padding: '30px 0px' }}
              >
                <p
                  style={{
                    fontSize: 23,
                    lineHeight: '40px',
                    textAlign: 'center',
                    color: '#12063D',
                    padding: '0px 30px'
                  }}
                >
                  $AUDIO have not been registered under the U.S. Securities Act
                  of 1933 (“Securities Act”), as amended, and may not be offered
                  or sold in the United States or to a U.S. person (as defined
                  in Regulation S promulgated under the Securities Act) absent
                  registration or an applicable exemption from the registration
                  requirements.
                </p>
                <button
                  className='close-modal'
                  style={{
                    position: 'unset',
                    width: 'unset',
                    height: 60,
                    margin: '20px auto 0px',
                    userSelect: 'none'
                  }}
                  onClick={() =>
                    window.localStorage.setItem(
                      'securities-notice-seen',
                      'true'
                    )
                  }
                >
                  <a className='standard-button purple' rel='noopener'>
                    Accept
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id='trigger-popup' className='person' data-modal='video-modal'>
          <div className='description'>
            <div className='bio'>
              <p></p>
            </div>
          </div>
        </div>

        <div>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

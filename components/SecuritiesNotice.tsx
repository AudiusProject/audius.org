import React, { useEffect, useRef } from 'react'

const SecuritiesNotice = () => {
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const seen = window.localStorage.getItem('securities-notice-seen')
    if (!seen) {
      const el = triggerRef.current
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
  }, [triggerRef])

  return (
    <>
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
                $AUDIO have not been registered under the U.S. Securities Act of
                1933 (“Securities Act”), as amended, and may not be offered or
                sold in the United States or to a U.S. person (as defined in
                Regulation S promulgated under the Securities Act) absent
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
                  window.localStorage.setItem('securities-notice-seen', 'true')
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
      <div
        id='trigger-popup'
        className='person'
        data-modal='video-modal'
        ref={triggerRef}
      >
        <div className='description'>
          <div className='bio'>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SecuritiesNotice

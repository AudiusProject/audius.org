import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef } from 'react'

const SecuritiesNotice = () => {
  const { t } = useTranslation()

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
      <div id='securities-modal' className='modal' aria-hidden='true'>
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
                {t('securities-modal-content')}
              </p>
              <button
                className='close-modal'
                id='securities-notice-accept'
                style={{
                  position: 'unset',
                  width: 'unset',
                  height: 60,
                  margin: '20px auto 0px',
                  userSelect: 'none'
                }}
              >
                <a className='standard-button purple' rel='noopener'>
                  {t('securities-modal-accept')}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id='trigger-popup'
        data-modal='securities-modal'
        ref={triggerRef}
      ></div>
    </>
  )
}
export default SecuritiesNotice

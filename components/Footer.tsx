import React, { useState } from 'react'

import { useTranslation } from 'next-i18next'
import { useTransition, animated, useSpring } from 'react-spring'

import StyledLink from './StyledLink'

const LOCATIONS = [
  'Atlanta',
  'Austin',
  'Boiling Springs',
  'Boulder',
  'Brooklyn',
  'Centreville',
  'Chantilly',
  'Dallas',
  'Jersey City',
  'Las Vegas',
  'Los Angeles',
  'Marin',
  'Miami',
  'New York City',
  'Oakland',
  'Portland',
  'Richmond',
  'San Antonio',
  'San Francisco',
  'Seattle',
  'Walnut Creek',
]

const RemoteSpace = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * LOCATIONS.length))
  const onMouseMove = () => {
    setIndex(index => index + 1)
  }
  const transitions = useTransition(LOCATIONS[index % LOCATIONS.length], {
    from: { opacity: 0.6 },
    enter: { opacity: 1 },
    leave: { opacity: 0, config: { duration: 0 } }
  })

  return <span style={{ position: 'relative' }}>
    {
      transitions((props, item) => {
        return (
          <animated.span
            onMouseMove={onMouseMove}
            style={{
              ...props,
              position: 'absolute',
              left: 5,
              color: '#a116b7',
              borderBottom: '1px solid #a116b7',
              whiteSpace: 'nowrap',
              cursor: 'default'
            }}
          >
            {item}
          </animated.span>
        )
      })
    }
  </span>
}

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='boilerplate'>
            <div className='logo'>
              <img src='/img/audius-footer.png' data-rjs='2' alt='Audius' />
            </div>
          </div>
          <div className='navigation'>
            <nav className='foundation-links'>
              <h4>{t('footer-foundation-links')}</h4>
              <ul>
                <li>
                  <StyledLink href='/api'>{t('navigation-api')}</StyledLink>
                </li>
                <li>
                  <a
                    href='https://docs.audius.org'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('navigation-docs')}
                  </a>
                </li>
                <li>
                  <a
                    href='https://whitepaper.audius.co'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('whitepaper')}
                  </a>
                </li>
                <li>
                  <StyledLink href='/token'>{t('navigation-token')}</StyledLink>
                </li>
                <li>
                  <StyledLink href='/security'>
                    {t('navigation-security')}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href='/privacy-policy.pdf'>
                    {t('navigation-privacy-policy')}
                  </StyledLink>
                </li>
              </ul>
            </nav>
            <nav className='audius-links'>
              <h4>{t('footer-audius-links')}</h4>
              <ul>
                <li>
                  <a
                    href='https://audius.co'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {'Audius Music'}
                  </a>
                </li>
                <li>
                  <a
                    href='https://audius.co/download'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {'Download'}
                  </a>
                </li>
                <li>
                  <a
                    href='https://support.audius.co'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {'Support'}
                  </a>
                </li>
                <li>
                  <a
                    href='https://blog.audius.co'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {'Blog'}
                  </a>
                </li>
              </ul>
            </nav>
            <nav className='social'>
              <h4>{t('footer-audius-socials')}</h4>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://instagram.com/audius'
                  >
                    <svg
                      className='instagram'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M8.37507 2.57029C10.0259 2.47657 14.9741 2.47657 16.6249 2.57029C18.2267 2.65062 19.6456 3.01657 20.8146 4.18582C21.988 5.35507 22.3539 6.77424 22.4297 8.37638C22.5234 10.0276 22.5234 14.9724 22.4297 16.6236C22.3494 18.2258 21.9835 19.6449 20.8146 20.8142C19.6456 21.9879 18.2267 22.3538 16.6249 22.4297C14.9741 22.5234 10.0259 22.5234 8.37507 22.4297C6.77328 22.3494 5.3589 21.9834 4.18544 20.8142C3.01199 19.6449 2.64612 18.2258 2.57027 16.6236C2.47658 14.9724 2.47658 10.0232 2.57027 8.37192C2.65059 6.76978 3.01199 5.35061 4.18544 4.18136C5.3589 3.01211 6.77775 2.64616 8.37507 2.57029ZM12.5 6.875C9.38642 6.875 6.875 9.38642 6.875 12.5C6.875 15.6136 9.38642 18.125 12.5 18.125C15.6136 18.125 18.125 15.6136 18.125 12.5C18.125 9.38642 15.6136 6.875 12.5 6.875ZM12.5 8.75C14.5683 8.75 16.25 10.4317 16.25 12.5C16.25 14.5683 14.5633 16.25 12.5 16.25C10.4367 16.25 8.75 14.5683 8.75 12.5C8.75 10.4317 10.4317 8.75 12.5 8.75ZM18.125 5.625C17.4347 5.625 16.875 6.1847 16.875 6.875C16.875 7.5653 17.43 8.125 18.125 8.125C18.8153 8.125 19.375 7.56996 19.375 6.875C19.375 6.1847 18.8153 5.625 18.125 5.625Z" fill="#12063D"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://twitter.com/audius'
                  >
                    <svg
                      className='twitter'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path id="Vector" d="M8.05016 22.2502C17.1045 22.2502 22.0583 14.7469 22.0583 8.2421C22.0583 8.03116 22.0536 7.81554 22.0442 7.6046C23.0079 6.9077 23.8395 6.04449 24.5 5.05554C23.6025 5.45484 22.6496 5.71562 21.6739 5.82898C22.7013 5.21315 23.4705 4.24571 23.8391 3.10601C22.8726 3.6788 21.8156 4.08285 20.7134 4.30085C19.9708 3.5118 18.989 2.98936 17.9197 2.81429C16.8504 2.63923 15.7532 2.82129 14.7977 3.33234C13.8423 3.84338 13.0818 4.65495 12.6338 5.64155C12.1859 6.62816 12.0754 7.73486 12.3195 8.79054C10.3625 8.69233 8.44794 8.18394 6.69998 7.29834C4.95203 6.41273 3.40969 5.16968 2.17297 3.64976C1.5444 4.73348 1.35206 6.01589 1.63503 7.23633C1.918 8.45678 2.65506 9.52369 3.69641 10.2202C2.91463 10.1954 2.14998 9.98492 1.46562 9.60616V9.6671C1.46492 10.8043 1.8581 11.9068 2.57831 12.787C3.29852 13.6672 4.30132 14.2708 5.41625 14.4952C4.69206 14.6933 3.93198 14.7222 3.19484 14.5796C3.50945 15.5576 4.12157 16.4131 4.94577 17.0265C5.76997 17.64 6.76512 17.9808 7.79234 18.0014C6.04842 19.3713 3.89417 20.1143 1.67656 20.1108C1.28329 20.1102 0.890399 20.0861 0.5 20.0386C2.75286 21.4839 5.37353 22.2516 8.05016 22.2502Z" fill="#12063D"/>
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://discord.gg/audius'
                  >
                    <svg
                      className='github'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M17.2939 13.7878C17.2939 14.8324 16.5233 15.6885 15.5473 15.6885C14.5884 15.6885 13.8007 14.8324 13.8007 13.7878C13.8007 12.7433 14.5713 11.8871 15.5473 11.8871C16.5233 11.8871 17.2939 12.7433 17.2939 13.7878ZM9.29746 11.8871C8.32143 11.8871 7.55088 12.7433 7.55088 13.7878C7.55088 14.8324 8.33855 15.6885 9.29746 15.6885C10.2735 15.6885 11.044 14.8324 11.044 13.7878C11.0612 12.7433 10.2735 11.8871 9.29746 11.8871ZM22.5 17.281C22.5 11.7673 20.0342 7.29809 20.0342 7.29809C17.5685 5.44877 15.2226 5.50014 15.2226 5.50014L14.9829 5.77412C17.8938 6.66453 19.2466 7.94877 19.2466 7.94877C15.1791 5.71947 10.4011 5.71907 6.45548 7.4522C5.82192 7.74329 5.44521 7.94877 5.44521 7.94877C5.44521 7.94877 6.86644 6.59603 9.94863 5.70562L9.7774 5.50014C9.7774 5.50014 7.43151 5.44877 4.96575 7.29809C4.96575 7.29809 2.5 11.7673 2.5 17.281C2.5 17.281 3.93836 19.7638 7.7226 19.8837C7.7226 19.8837 8.35617 19.1132 8.86986 18.4625C6.69521 17.8118 5.87329 16.4419 5.87329 16.4419C6.12519 16.6182 6.54056 16.8468 6.57534 16.87C9.46557 18.4886 13.571 19.0188 17.2603 17.4693C17.8596 17.2467 18.5274 16.9214 19.2295 16.459C19.2295 16.459 18.3733 17.8632 16.1301 18.4967C16.6438 19.1474 17.2603 19.8837 17.2603 19.8837C21.0445 19.7638 22.5 17.281 22.5 17.281Z" fill="#12063D"/>
                    </svg>
                    <span>Discord</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://t.me/Audius'
                  >
                    <svg
                      className='telegram'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path id="Vector" d="M12.5 2.5C6.97714 2.5 2.5 6.97714 2.5 12.5C2.5 18.0229 6.97714 22.5 12.5 22.5C18.0229 22.5 22.5 18.0229 22.5 12.5C22.5 6.97714 18.0229 2.5 12.5 2.5ZM17.1352 9.30081C16.9847 10.8821 16.3335 14.7193 16.0021 16.4903C15.8619 17.2397 15.5859 17.491 15.3187 17.5155C14.7381 17.569 14.297 17.1318 13.7346 16.7631C12.8544 16.1861 12.3572 15.827 11.5029 15.264C10.5156 14.6134 11.1556 14.2559 11.7183 13.6712C11.8655 13.5183 14.4242 11.191 14.4737 10.9799C14.4799 10.9535 14.4858 10.8549 14.4272 10.8031C14.3685 10.7513 14.2824 10.7689 14.2201 10.7829C14.1319 10.803 12.7258 11.7323 10.0021 13.5709C9.603 13.845 9.24152 13.9785 8.91762 13.9715C8.56056 13.9638 7.87375 13.7696 7.36315 13.6036C6.7369 13.4001 6.23915 13.2925 6.2825 12.9467C6.30508 12.7666 6.55306 12.5825 7.02645 12.3943C9.94167 11.1242 11.8856 10.2868 12.8582 9.88222C15.6353 8.7271 16.2124 8.52645 16.5885 8.51976C16.6712 8.51839 16.8562 8.53887 16.976 8.63609C17.0557 8.70534 17.1065 8.80198 17.1183 8.9069C17.1386 9.03716 17.1443 9.16929 17.1352 9.30081Z" fill="#12063D"/>
                    </svg>
                    <span>Telegram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='sign-off'>
          <p className='copyright'>
            <span className='mobile-break'>
              © {new Date().getFullYear()} Open Audio Foundation. All Rights Reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

import { useTranslation } from 'next-i18next'

import StyledLink from 'components/StyledLink'
import IconClose from 'public/img/iconClose.svg'
import IconSquiggleBold from 'public/img/iconSquiggleBold.svg'

const Header = () => {
  const { t } = useTranslation()

  return (
    <>
      <button id='menu-button' className='mobile-only'>
        <IconSquiggleBold />
        <IconClose />
        <span>{t('navigation-show-menu')}</span>
      </button>

      <header className='main-header'>
        <h1 className='logo'>
          <StyledLink href='/home'>
            <img src='/img/audius.png' data-rjs='2' alt='Audius' />
            <span>Audius</span>
          </StyledLink>
        </h1>
        <nav className='menu'>
          <div>
            <ul>
              <li className='mobile-only'>
                <StyledLink href='/home'>{t('navigation-home')}</StyledLink>
              </li>
              <li>
                <StyledLink href='/protocol'>
                  {t('navigation-protocol')}
                </StyledLink>
              </li>
              <li>
                <StyledLink href='/api'>{t('navigation-api')}</StyledLink>
              </li>
              <li>
                <StyledLink href='/token'>{t('navigation-token')}</StyledLink>
              </li>
              <li>
                <StyledLink href='/team'>{t('navigation-team')}</StyledLink>
              </li>
              <li>
                <StyledLink href='/careers'>
                  {t('navigation-careers')}
                </StyledLink>
              </li>
              <li>
                <a
                  className='standard-button purple'
                  href='https://whitepaper.audius.co/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('whitepaper')}
                </a>
              </li>
            </ul>
          </div>
          <span className='bg-shapes'>
            <span></span>
          </span>
        </nav>
      </header>
    </>
  )
}

export default Header

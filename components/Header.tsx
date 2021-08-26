import React from 'react'

import { useTranslation } from 'next-i18next'

import NavPopup from 'components/NavPopup'
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
              <li>
                <NavPopup label='Developers'>
                  <StyledLink href='/home'>{t('navigation-home')}</StyledLink>
                </NavPopup>
              </li>
              <li>
                <a
                  className='standard-button purple'
                  href='https://audius.gitbook.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('navigation-docs')}
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

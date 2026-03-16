import React, { useState } from 'react'

import { useTranslation } from 'next-i18next'

import LocalePicker from 'components/LocalePicker'
import NavPopup from 'components/NavPopup'
import StyledLink from 'components/StyledLink'
import IconClose from 'public/img/iconClose.svg'
import IconKebabHorizontal from 'public/img/iconKebabHorizontal.svg'

type HeaderProps = {
  // The clone is the sticky version of the header
  isClone?: boolean
}

const initialPopupState = {
  about: false,
  localePicker: false
}

const Header = ({ isClone }: HeaderProps) => {
  const { t } = useTranslation()
  const [popupState, setPopupState] = useState(initialPopupState)

  // Close all other popups when one is opened
  const updatePopupState =
    (key: keyof typeof initialPopupState) => (open: boolean) => {
      setPopupState({
        ...initialPopupState,
        [key]: open
      })
    }

  return (
    <>
      <button id='menu-button' className='mobile-only'>
        <div className='icon-kebab'>
          <IconKebabHorizontal />
        </div>
        <IconClose />
        <span>{t('navigation-show-menu')}</span>
      </button>

      <header className={`main-header ${isClone ? 'clone' : ''}`}>
        <h1 className='logo'>
          <StyledLink href='/home'>
            <img
              src='/img/audius.png'
              data-rjs='2'
              alt='Open Audio Foundation'
            />
            <span>Open Audio Foundation</span>
          </StyledLink>
        </h1>
        <nav className='menu'>
          <div>
            <ul>
              <li>
                <a
                  className='menu-item'
                  href='https://whitepaper.audius.co'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('navigation-whitepaper')}
                </a>
              </li>
              <li>
                <StyledLink href='/token' className='menu-item'>
                  {t('navigation-tokenomics')}
                </StyledLink>
              </li>
              <li>
                <LocalePicker
                  isOpen={popupState.localePicker}
                  setIsOpen={updatePopupState('localePicker')}
                />
              </li>
              <li>
                <a
                  className='standard-button menu-item purple'
                  href='https://docs.openaudio.org/'
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

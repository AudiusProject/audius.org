import React, { useState } from 'react'

import { useTranslation } from 'next-i18next'

import LocalePicker from 'components/LocalePicker'
import NavPopup from 'components/NavPopup'
import StyledLink from 'components/StyledLink'
import IconClose from 'public/img/iconClose.svg'
import IconDashboard from 'public/img/iconDashboard.svg'
import IconHedgehog from 'public/img/iconHedgehog.svg'
import IconKebabHorizontal from 'public/img/iconKebabHorizontal.svg'
import IconNavigationApi from 'public/img/iconNavigationApi.svg'
import IconNavigationCareer from 'public/img/iconNavigationCareer.svg'
import IconNavigationDocs from 'public/img/iconNavigationDocs.svg'
import IconNavigationRunningNode from 'public/img/iconNavigationRunningNode.svg'
import IconNavigationStaking from 'public/img/iconNavigationStaking.svg'
import IconNavigationTeam from 'public/img/iconNavigationTeam.svg'
import IconNavigationTokenomics from 'public/img/iconNavigationTokenomics.svg'
import IconNavigationWhitepaper from 'public/img/iconNavigationWhitepaper.svg'

const renderIcon = (Icon: any) => () =>
  <Icon height={21} width={21} className='icon' />

type HeaderProps = {
  // The clone is the sticky version of the header
  isClone?: boolean
}

const initialPopupState = {
  developers: false,
  token: false,
  protocol: false,
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
            <img src='/img/audius.png' data-rjs='2' alt='Audius' />
            <span>Audius</span>
          </StyledLink>
        </h1>
        <nav className='menu'>
          <div>
            <ul>
              <li>
                <NavPopup
                  label={t('navigation-developers')}
                  items={[
                    {
                      label: t('navigation-api'),
                      icon: renderIcon(IconNavigationApi),
                      href: '/api'
                    },
                    {
                      label: t('navigation-docs'),
                      icon: renderIcon(IconNavigationDocs),
                      href: 'https://docs.audius.org'
                    },
                    {
                      label: t('hedgehog'),
                      icon: renderIcon(IconHedgehog),
                      href: 'https://hedgehog.audius.org'
                    }
                  ]}
                  isOpen={popupState.developers}
                  setIsOpen={updatePopupState('developers')}
                />
              </li>
              <li>
                <NavPopup
                  label={t('navigation-token')}
                  items={[
                    {
                      label: t('navigation-whitepaper'),
                      icon: renderIcon(IconNavigationWhitepaper),
                      href: 'https://whitepaper.audius.co'
                    },
                    {
                      label: t('navigation-tokenomics'),
                      icon: renderIcon(IconNavigationTokenomics),
                      href: '/token'
                    },
                    {
                      label: t('navigation-staking'),
                      icon: renderIcon(IconNavigationStaking),
                      href: 'https://docs.audius.org/token/staking'
                    }
                  ]}
                  isOpen={popupState.token}
                  setIsOpen={updatePopupState('token')}
                />
              </li>
              <li>
                <NavPopup
                  label={t('navigation-protocol')}
                  items={[
                    {
                      label: t('navigation-protocol-dashboard'),
                      icon: renderIcon(IconDashboard),
                      href: 'https://dashboard.audius.org'
                    },
                    {
                      label: t('navigation-running-node'),
                      icon: renderIcon(IconNavigationRunningNode),
                      href: 'https://docs.audius.org/token/running-a-node/introduction'
                    }
                  ]}
                  isOpen={popupState.protocol}
                  setIsOpen={updatePopupState('protocol')}
                />
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
                  href='https://docs.audius.org'
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

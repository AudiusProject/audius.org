import React from 'react'

import { useTranslation } from 'next-i18next'

import NavPopup from 'components/NavPopup'
import StyledLink from 'components/StyledLink'
import IconClose from 'public/img/iconClose.svg'
import IconSquiggleBold from 'public/img/iconSquiggleBold.svg'
import IconNavigationApi from 'public/img/iconNavigationApi.svg'
import IconNavigationDocs from 'public/img/iconNavigationDocs.svg'
import IconNavigationWhitepaper from 'public/img/iconNavigationWhitepaper.svg'
import IconNavigationTokenomics from 'public/img/iconNavigationTokenomics.svg'
import IconNavigationStaking from 'public/img/iconNavigationStaking.svg'
import IconNavigationRunningNode from 'public/img/iconNavigationRunningNode.svg'
import IconNavigationCareer from 'public/img/iconNavigationCareer.svg'
import IconNavigationTeam from 'public/img/iconNavigationTeam.svg'
import LocalePicker from './LocalePicker'

const renderIcon = (Icon: any) => () => <Icon height={21} width={21} />

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
                <NavPopup
                  label={t('navigation-developers')}
                  items={[
                    {
                      label: t('navigation-api'),
                      icon: renderIcon(IconNavigationApi),
                      href: '/api'
                    },
                    {
                      label: t('navigation-3rd-party-docs'),
                      icon: renderIcon(IconNavigationDocs),
                      href: 'https://audius.gitbook.io/'
                    }
                  ]}
                />
              </li>
              <li>
                <NavPopup
                  label={t('navigation-token')}
                  items={[
                    {
                      label: t('navigation-whitepaper'),
                      icon: renderIcon(IconNavigationWhitepaper),
                      href: 'https://whitepaper.audius.co/'
                    },
                    {
                      label: t('navigation-tokenomics'),
                      icon: renderIcon(IconNavigationTokenomics),
                      href: '/token'
                    },
                    {
                      label: t('navigation-staking'),
                      icon: renderIcon(IconNavigationStaking),
                      href: 'https://audius.gitbook.io/docs/token/staking'
                    }
                  ]}
                />
              </li>
              <li>
                <NavPopup
                  label={t('navigation-protocol')}
                  items={[
                    {
                      label: t('navigation-running-node'),
                      icon: renderIcon(IconNavigationRunningNode),
                      href: 'https://audius.gitbook.io/docs/token/running-a-node'
                    }
                  ]}
                />
              </li>
              <li>
                <NavPopup
                  label={t('navigation-about')}
                  items={[
                    {
                      label: t('navigation-careers'),
                      icon: renderIcon(IconNavigationCareer),
                      href: '/careers'
                    },
                    {
                      label: t('navigation-team'),
                      icon: renderIcon(IconNavigationTeam),
                      href: '/team'
                    }
                  ]}
                />
              </li>
              <li>
                <LocalePicker />
              </li>
              <li>
                <a
                  className='standard-button menu-item purple'
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

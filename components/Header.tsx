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
import IconNavigationWiki from 'public/img/iconNavigationWiki.svg'
import IconNavigationCareer from 'public/img/iconNavigationCareer.svg'
import IconNavigationTeam from 'public/img/iconNavigationTeam.svg'

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
                  labelKey='navigation-developers'
                  items={[
                    {
                      labelKey: 'navigation-api',
                      icon: IconNavigationApi,
                      href: '/api'
                    },
                    {
                      labelKey: 'navigation-3rd-party-docs',
                      icon: IconNavigationDocs,
                      href: 'https://audius.gitbook.io/'
                    }
                  ]}
                />
              </li>
              <li>
                <NavPopup
                  labelKey='navigation-token'
                  items={[
                    {
                      labelKey: 'navigation-whitepaper',
                      icon: IconNavigationWhitepaper,
                      href: 'https://whitepaper.audius.co/'
                    },
                    {
                      labelKey: 'navigation-tokenomics',
                      icon: IconNavigationTokenomics,
                      href: '/token'
                    },
                    {
                      labelKey: 'navigation-staking',
                      icon: IconNavigationStaking,
                      href: 'https://audius.gitbook.io/docs/token/staking'
                    }
                  ]}
                />
              </li>
              <li>
                <NavPopup
                  labelKey='navigation-protocol'
                  items={[
                    {
                      labelKey: 'navigation-running-node',
                      icon: IconNavigationRunningNode,
                      href: 'https://audius.gitbook.io/docs/token/running-a-node'
                    },
                    {
                      labelKey: 'navigation-wiki',
                      icon: IconNavigationWiki,
                      href: '/token'
                    }
                  ]}
                />
              </li>
              <li>
                <NavPopup
                  labelKey='navigation-about'
                  items={[
                    {
                      labelKey: 'navigation-career',
                      icon: IconNavigationCareer,
                      href: '/careers'
                    },
                    {
                      labelKey: 'navigation-team',
                      icon: IconNavigationTeam,
                      href: '/team'
                    }
                  ]}
                />
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

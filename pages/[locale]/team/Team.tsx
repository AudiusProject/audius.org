import React from 'react'

import { useTranslation } from 'next-i18next'
import Head from 'next/head'

import Investors from 'components/Investors'
import Link from 'components/Link'
import Newsletter from 'components/Newsletter'
import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'

import Bio from './Bio'
import advisors from './advisors.json'
import leadership from './leadership.json'
import teamMembers from './teamMembers.json'

const Team = () => {
  const { t } = useTranslation()
  return (
    <div className='team mask-animation-fix'>
      <Head>
        <title>{t('navigation-team')}</title>
        <OpenGraphTags title='Audius | Team' path='/team' />
      </Head>

      <SubpageIntro
        title={t('navigation-team')}
        description={
          <>
            {t('team-description')}{' '}
            <Link href='/careers'>
              <a>{t('team-hiring')}</a>
            </Link>
          </>
        }
      />

      <section id='leadership' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Leadership</h2>
          </div>
          <div className='row two-columns three-columns leadership'>
            {leadership.map((l) => (
              <Bio {...l} key={l.name} />
            ))}
          </div>

          <div className='row three-columns'>
            {teamMembers.map((m) => (
              <Bio {...m} key={m.name} />
            ))}
          </div>
        </div>
      </section>

      <section className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <h3>{t('team-join')}</h3>
              <p>{t('team-mission')}</p>
            </div>
            <a
              className='standard-button purple'
              href='mailto:careers@audius.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('team-contact')}
            </a>
          </div>
        </div>
      </section>

      <section id='advisors' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('team-advisors-headline')}</h2>
          </div>
          <div className='row three-columns'>
            {advisors.map((a) => (
              <Bio {...a} key={a.name} disableModal />
            ))}
          </div>
        </div>
      </section>

      <Investors />
      <Newsletter />

      <span className='parallax-sphere sphere orange' data-parallax='3'></span>
      <span
        className='parallax-sphere sphere orange-opaque'
        data-parallax='1'
      ></span>
      <span
        className='parallax-sphere sphere purple-glow'
        data-parallax='2'
      ></span>
      <span className='parallax-sphere sphere teal' data-parallax='5'></span>
      <span
        className='parallax-sphere sphere teal-opaque'
        data-parallax='6'
      ></span>
    </div>
  )
}

export default Team

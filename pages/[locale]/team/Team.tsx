import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Investors from 'components/Investors'
import Newsletter from 'components/Newsletter'
import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'

import Bio from './Bio'
import advisors from './advisors.json'
import leadership from './leadership.json'
import teamMembers from './teamMembers.json'

const Team = () => {
  return (
    <div className='team mask-animation-fix'>
      <Head>
        <title>Team</title>
        <OpenGraphTags title='Audius | Team' path='/team' />
      </Head>

      <SubpageIntro
        title='Team'
        description={
          <>
            Audius is a team of entrepreneurs, engineers, audiophiles, and
            blockchain experts. Our mission is to empower a new generation of
            audio artists on the decentralized web.{' '}
            <Link href='/careers'>
              <a>We&apos;re hiring!</a>
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
            {leadership.map(Bio)}
          </div>

          <div className='row three-columns'>{teamMembers.map(Bio)}</div>
        </div>
      </section>

      <section className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <h3>Join Our Team</h3>
              <p>
                Want to help empower artists
                <br />
                across the globe?
              </p>
            </div>
            <a
              className='standard-button purple'
              href='mailto:careers@audius.co'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section id='advisors' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Advisors</h2>
          </div>
          <div className='row three-columns'>{advisors.map(Bio)}</div>
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

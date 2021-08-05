import React from 'react'

import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'

import leadership from './leadership.json'
import teamMembers from './teamMembers.json'
import advisors from './advisors.json'
import Bio from './Bio'
import Investors from 'components/Investors'
import Newsletter from 'components/Newsletter'

const TeamPage = () => {
  return (
    <div className='team-page mask-animation-fix'>
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
            <a href='/careers/'>We're hiring!</a>
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
              rel='noopener'
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
    </div>
  )
}

export default TeamPage

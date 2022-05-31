import React from 'react'

import { useTranslation } from 'next-i18next'


import Head from 'components/Head'
import SubpageIntro from 'components/SubpageIntro'
import BabyCarriage from 'public/img/baby-carriage.svg'
import ChairOffice from 'public/img/chair-office.svg'
import CoinFront from 'public/img/coin-front.svg'
import GraduationCap from 'public/img/graduation-cap.svg'
import GuitarElectric from 'public/img/guitar-electric.svg'
import HeadSideHeart from 'public/img/head-side-heart.svg'
import IslandTropical from 'public/img/island-tropical.svg'
import PeopleGroup from 'public/img/people-group.svg'
import PiggyBank from 'public/img/piggy-bank.svg'
import PlaneEngines from 'public/img/plane-engines.svg'
import UserDoctorHairLong from 'public/img/user-doctor-hair-long.svg'
import { scrollToAnchor } from 'utils/scrollToAnchor'

const Careers = () => {
  const { t } = useTranslation()

  return (
    <div className='careers mask-animation-fix'>
      <Head
        title={t('navigation-careers')}
        path='/careers'
        description='Want to help empower artists across the globe?'
      />

      <SubpageIntro title={t('navigation-careers')} showDivider />

      <section id='who-we-are'>
        <div className='container'>
          <div className='row two-columns'>
            <div className='column'>
              <p>Audius is a vibrant, decentralized &amp; open-source community of artists, fans, and developers building a Web3 audio streaming protocol that delivers an unprecedented level of music sharing intimacy and platform ownership.</p>
              <p>Our team envisions a world where artists and fans build equity in the systems they create and control the tools they use. We&apos;re hiring (remotely) across the US.</p>
              <p>Come join us!</p>
              <p>
                <a
                  className='standard-button purple'
                  onClick={() => scrollToAnchor('job-openings')}
                >
                  {t('careers-listings')}
                </a>
              </p>
            </div>
            <div className='column'>
              <div className='heroImage'>
                <img src='/img/tulum-working.jpg' alt='Photo of Audius team' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src='/img/top-golf-bw.jpg' alt='team dinner' className='hero-image' />

      <section id='working-at' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Working At Audius</h2>
            <p>We&apos;re a remote team building on Web3 and the cutting-edge of what is possible in streaming technology. And while we use it deeply, we see the blockchain not as the product itself, but as the means to building a one-of-a-kind decentralized &amp; creator-first music ecosystem for the modern internet. And while we&apos;ve embraced remote-first work, nothing is more important than the human connection &amp; empathy we build for each other IRL.</p>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <img src='/img/bubblesoccer.jpg' alt='Photo of Audius team' />
              <p>The teams gets competitive in Bubble Soccer in San Francisco</p>
            </div>
            <div className='column'>
              <img src='/img/breakfast.jpg' alt='Photo of Audius team' />
              <p>A breakfast of champions at our Lake Tahoe team retreat</p>
            </div>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <img src='/img/pair-coding.jpg' alt='Photo of Audius team' />
              <p>KJ &amp; Isaac launch the &quot;Audius NFT profile picture&quot; feature on a retreat in Tulum</p>
            </div>
            <div className='column'>
              <img src='/img/floral.jpg' alt='Photo of Audius team' />
              <p>The team gathers remotely for one of our monthly team-building activities -- a floral arrangement course!</p>
            </div>
          </div>
        </div>
      </section>
      <section id='working-at' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Community At Audius</h2>
            <p>Our team publishes a few editorial playlists of &amp; for the community.</p>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <iframe
                style={{
                  border: 'none',
                  width: '100%'
                }}
                src='https://audius.co/embed/playlist/DOPRl?flavor=card'
                width="100%"
                height="540"
                allow="encrypted-media"
              />
            </div>
            <div className='column'>
              <iframe
                style={{
                  border: 'none',
                  width: '100%'
                }}
                src='https://audius.co/embed/playlist/em0Rp?flavor=card'
                width="100%"
                height="540"
                allow="encrypted-media"
              />
            </div>
            <div className='column'>
              <iframe
                style={{
                  border: 'none',
                  width: '100%'
                }}
                src='https://audius.co/embed/playlist/aAJ9o?flavor=card'
                width="100%"
                height="540"
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>
      </section>



      <img src='/img/team-dinner-vegas.jpg' alt='team dinner' className='hero-image' />

      <section className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <h3>{t('team-join')}</h3>
              <p>{t('team-mission')}</p>
            </div>
            <a
              className='standard-button purple'
              onClick={() => scrollToAnchor('job-openings')}
            >
              {t('careers-listings')}
            </a>
          </div>
        </div>
      </section>

      <section id='benefits' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Benefits</h2>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <p><CoinFront className='icon' />Competitive Salary &amp; Token Equity</p>
              <p><IslandTropical className='icon' />Unlimited PTO</p>
              <p><UserDoctorHairLong className='icon' />Health &amp; Dental</p>
              <p><PiggyBank className='icon' />401K &amp; FSA</p>
              <p><GuitarElectric className='icon' />Monthly Music Stipend</p>
              <p><GraduationCap className='icon' />Annual Learning Stipend</p>
            </div>
            <div className='column'>
              <p><ChairOffice className='icon' />Home Office Set-Up</p>
              <p><HeadSideHeart className='icon' />Mental &amp; Physical Wellness Stipend</p>
              <p><PlaneEngines className='icon' />2x / Year Company Retreats</p>
              <p><PeopleGroup className='icon' />Budget for Team Meetups</p>
              <p><BabyCarriage className='icon' />16 Weeks Parental Leave</p>
            </div>
          </div>
        </div>
      </section>

      <section id='job-openings' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Job Openings</h2>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <h2>Engineering</h2>
              <a href="https://jobs.lever.co/audius/28d90111-c18d-49ec-a44d-8577fa4e58bc" target="_blank" rel="noreferrer">
                <p>Software Engineer - Frontend</p>
              </a>
              <a href="https://jobs.lever.co/audius/06e37352-9e96-4932-8ea6-43b4cf8f1a2b" target="_blank" rel="noreferrer">
                <p>Software Engineer - Full Stack</p>
              </a>
              <a href="https://jobs.lever.co/audius/fa274c08-181a-439b-9739-52c6c7ba1f44" target="_blank" rel="noreferrer">
                <p>Software Engineer - Backend</p>
              </a>
              <a href="https://jobs.lever.co/audius/43dfeeed-c525-4d84-bbba-683086001342" target="_blank" rel="noreferrer">
                <p>Software Engineer - Infrastructure &amp; Tooling</p>
              </a>
            </div>
            <div className='column'>
              <h2>Design</h2>
              <a href="https://jobs.lever.co/audius/3084c37b-adcd-4a2a-8b8a-0b60605c5f65" target="_blank" rel="noreferrer">
                <p>Senior Motion Designer</p>
              </a>
              <a href="https://jobs.lever.co/audius/763221b9-2512-492c-9aae-1564b02cc2ed" target="_blank" rel="noreferrer">
                <p>Product Designer</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='newsletter'>
        <div className='container'>
          <div className='content'>
            <div className='header'>
              <h3>{t('careers-launch-app-headline')}</h3>
              <button
                className='learn-more'
                onClick={() => (window.open('https://audius.co/', '_blank'))}
              >
                {t('careers-launch-app')}
              </button>
            </div>
          </div>
        </div>
        <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
          <img
            src='/img/newsletter-shapes.png'
            alt='Audius newsletter graphic'
            data-rjs='2'
          />
        </span>
      </section>

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
    </div >
  )
}

export default Careers

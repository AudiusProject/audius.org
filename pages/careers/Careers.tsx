import React from 'react'

import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'
import SquiggleIcon from 'public/img/iconSquiggle.svg'

const Careers = () => {
  return (
    <div className='careers mask-animation-fix'>
      <Head>
        <title>Careers</title>
        <OpenGraphTags
          title='Audius | Careers'
          path='/careers'
          description='Want to help empower artists across the globe?'
        />
      </Head>

      <SubpageIntro title='Careers' showDivider />

      <section id='who-we-are' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Who We Are</h2>
          </div>
          <div className='content'>
            <p>
              Audius is a digital streaming service that connects fans directly
              with artists and exclusive new music.
              <br />
              <br />
              It does this by being fully decentralized: Audius is owned and run
              by a vibrant, open-source community of artists, fans, and api all
              around the world. Audius gives artists the power to share
              never-before-heard music and monetize streams directly. With the
              Audius API, developers can build their own apps on top of Audius,
              giving them access to one of the most unique audio catalogs in
              existence.
              <br />
              <br />
              Backed by an all-star team of investors, Audius was founded in
              2018 and serves millions of streams every month, making it the
              largest non-financial crypto application ever built.
            </p>
          </div>
        </div>
      </section>

      <section id='team-images'>
        <div className='col1'>
          <div className='imageWrapper'>
            <img src='/img/Team1.jpg' alt='Photo of Audius team' />
          </div>
          <div className='imageWrapper'>
            <img src='/img/Team3.jpg' alt='Photo of Audius team' />
          </div>
          <div className='imageWrapper'>
            <img src='/img/Team5.jpg' alt='Photo of Audius team' />
          </div>
        </div>
        <div className='col2'>
          <div className='imageWrapper'>
            <img src='/img/Team2.jpg' alt='Photo of Audius team' />
          </div>
          <div className='imageWrapper'>
            <img src='/img/Team4.jpg' alt='Photo of Audius team' />
          </div>
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
              href='https://jobs.lever.co/audius'
              target='_blank'
              rel='noopener'
            >
              Job Listings
            </a>
          </div>
        </div>
      </section>

      <section id='about-the-company' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>About The Company</h2>
          </div>
          <div className='content'>
            <p>
              Audius is a 18-person team of entrepreneurs, engineers,
              audiophiles, and blockchain experts. Our benefits include
              unlimited PTO, high quality paid medical insurance, FSA, 401k,
              yearly learning stipend, equipment stipend and a home office setup
              credit (whatever you need to be productive!). We also have a
              monthly stipend for music-related activities (concerts, lessons,
              etc.).
              <br />
              <br />
              Our company is fully remote and our team is currently distributed
              across the United States.
            </p>
          </div>
          <a className='standard-button purple' href='/team/' rel='noopener'>
            Check Out The Team
          </a>
        </div>
      </section>

      <section id='newsletter'>
        <div className='container'>
          <div className='content'>
            <div className='header'>
              <h3>See What All The Buzz Is About</h3>
              <button
                className='learn-more'
                onClick={() => (window.location.href = 'https://audius.co/')}
              >
                Launch The App
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
    </div>
  )
}

export default Careers

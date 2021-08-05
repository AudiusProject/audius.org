import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'
import Head from 'next/head'
import React from 'react'
import Newsletter from './Newsletter'
import WhitepaperCallout from './Whitepaper'

const TokenPage = () => {
  return (
    <div className='token-page'>
      <Head>
        <title>Token</title>
        <OpenGraphTags title='Audius | Token' path='/token' />
      </Head>

      <span
        className='parallax-sphere sphere purple-glow'
        data-parallax='1'
      ></span>
      <span className='parallax-sphere sphere teal' data-parallax='1'></span>
      <span
        className='parallax-sphere sphere teal-opaque'
        data-parallax='2'
      ></span>
      <SubpageIntro title='Token' />

      <section id='top' className='simple-callout'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              <p>
                Introducing <em>$AUDIO</em>,<br />
                The Audius Platform
                <br />
                Token
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='dashboard-link' className='token-features'>
        <a
          className='standard-button purple'
          href='https://dashboard.audius.org'
          target='_blank'
          rel='noopener'
        >
          Explore the Dashboard
        </a>
      </section>

      <section id='about' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>About</h2>
          </div>
          <div className='content'>
            <p>
              $AUDIO enables network security, exclusive feature access, and
              community-owned governance. The Audius protocol gives everyone the
              freedom to share, monetize, and listen to any audio. Thanks to
              $AUDIO, our users can earn a voice in the platform’s future
              through active contributions to the network.
              <br />
              <br />
              Our SoundCloud alternative helps artists monetize their work in
              creative ways by better engaging true fans. We’re here to create
              the future of streaming by giving users the means to shape Audius
              as the recipients of $AUDIO tokens.
              <br />
              <br />
              The protocol will live forever, owned and operated by a
              decentralized community of artists, api, and fans collaborating to
              defend the world’s music catalog.
            </p>
          </div>
        </div>
      </section>

      <section id='dashboard-link' className='token-features'>
        <a
          className='standard-button purple'
          href='https://discord.gg/kZkT9ZK'
          target='_blank'
          rel='noopener'
        >
          Join the Conversation on Discord
        </a>
      </section>

      <section id='audius' className='token-features'>
        <div className='container'>
          <div className='animations'>
            <div className='animation one'>
              <div id='token-audius-animation-1'>
                <div className='wave-1'>
                  <svg
                    className='wave'
                    aria-hidden='true'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='2033px'
                    height='289.3px'
                    viewBox='0 0 2033 289.3'
                  >
                    <path d='M0,0.6c169.4,0,169.4,270.1,338.8,270.1c169.4,0,169.4-255.6,338.8-255.6c169.4,0,169.4,231,338.8,231 c169.4,0,169.4-168.5,338.8-168.5c169.4,0,169.4,211,338.8,211c169.4,0,169.4-288.1,338.9-288.1' />
                  </svg>
                </div>
                <div className='wave-2'>
                  <svg
                    className='wave'
                    aria-hidden='true'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='2211.1px'
                    height='161.6px'
                    viewBox='0 0 2211.1 161.6'
                  >
                    <path d='M0,161.6c175.4,0,239.5-101.9,387.7-101.9c145.7,0,170,101.9,333.3,101.9C876.1,161.6,930.1,0,1105.5,0 s216.8,161.6,376.5,161.6c163.3,0,195.7-101.9,341.4-101.9c148.2,0,212.3,101.9,387.7,101.9' />
                  </svg>
                </div>
                <span className='seal'>
                  <img src='/img/platformToken@2x.png' data-rjs='2' alt='' />
                </span>
                <p>
                  Users stake $AUDIO to secure the platform, and in return
                  receive a share of network fees, governance weight, and
                  exclusive feature unlocks.
                </p>
              </div>
            </div>
            <div className='animation two'>
              <div id='token-audius-animation-2'>
                <span className='hands'>
                  <img
                    src='/img/token-audius-animation-2-hands.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='coin one'>
                  <img
                    src='/img/token-audius-animation-2-coin.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='coin two'>
                  <img
                    src='/img/token-audius-animation-2-coin.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='coin three'>
                  <img
                    src='/img/token-audius-animation-2-coin.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='coin four'>
                  <img
                    src='/img/token-audius-animation-2-coin.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='radio'>
                  <img
                    src='/img/token-audius-animation-2-radio.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol one'>
                  <img
                    src='/img/token-audius-animation-2-thumb.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol two'>
                  <img
                    src='/img/token-audius-animation-2-plus.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol three'>
                  <img
                    src='/img/token-audius-animation-2-note.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol four'>
                  <img
                    src='/img/token-audius-animation-2-heart.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol five'>
                  <img
                    src='/img/token-audius-animation-2-plus.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol six'>
                  <img
                    src='/img/token-audius-animation-2-thumb.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol seven'>
                  <img
                    src='/img/token-audius-animation-2-plus.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol eight'>
                  <img
                    src='/img/token-audius-animation-2-heart.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol nine'>
                  <img
                    src='/img/token-audius-animation-2-plus.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='symbol ten'>
                  <img
                    src='/img/token-audius-animation-2-thumb.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
                <span className='dial'></span>
                <span className='antenna'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className='waves'>
                  <div className='wave-1'>
                    <svg
                      className='wave'
                      aria-hidden='true'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='2033px'
                      height='289.3px'
                      viewBox='0 0 2033 289.3'
                    >
                      <path d='M0,0.6c169.4,0,169.4,270.1,338.8,270.1c169.4,0,169.4-255.6,338.8-255.6c169.4,0,169.4,231,338.8,231 c169.4,0,169.4-168.5,338.8-168.5c169.4,0,169.4,211,338.8,211c169.4,0,169.4-288.1,338.9-288.1' />
                    </svg>
                  </div>
                  <div className='wave-2'>
                    <svg
                      className='wave'
                      aria-hidden='true'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='2211.1px'
                      height='161.6px'
                      viewBox='0 0 2211.1 161.6'
                    >
                      <path d='M0,161.6c175.4,0,239.5-101.9,387.7-101.9c145.7,0,170,101.9,333.3,101.9C876.1,161.6,930.1,0,1105.5,0 s216.8,161.6,376.5,161.6c163.3,0,195.7-101.9,341.4-101.9c148.2,0,212.3,101.9,387.7,101.9' />
                    </svg>
                  </div>
                </div>
                <span className='bg'>
                  <img
                    src='/img/token-audius-animation-2-bg.png'
                    data-rjs='2'
                    alt=''
                  />
                </span>
              </div>
            </div>
            <a className='page-scroll has-title teal' href='#audius-features'>
              <span>Stake $AUDIO</span>
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='9.4'
                height='26.7'
                viewBox='0 0 9.4 26.7'
              >
                <path d='M7.8 19.3l-2.3 2.9v-22.2h-2v21.9l-1.9-2.7-1.6 1.2 4.5 6.3 4.9-6.1z' />
              </svg>
            </a>
          </div>
          <div id='audius-features' className='row two-columns'>
            <div className='column'>
              <div className='feature'>
                <div className='icon'>
                  <div>
                    <img
                      src='/img/iconNodes@2x.png'
                      alt='Icon for Nodes'
                      data-rjs='2'
                    />
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <b>To run discovery or content nodes.</b>
                  </p>
                  <p>
                    Providers get a higher probability of fan discovery and a
                    share of network fees for securing the network.
                  </p>
                </div>
              </div>
              <div className='feature'>
                <div className='icon'>
                  <div>
                    <img
                      src='/img/iconFeatures@2x.png'
                      alt='Icon for Features'
                      data-rjs='2'
                    />
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <b>To unlock exclusive features and services.</b>
                  </p>
                  <p>
                    Artists may unlock services like artist tokens and badges,
                    and receive voting power from fans who want to share in
                    their success.
                  </p>
                </div>
              </div>
              <div className='feature'>
                <div className='icon'>
                  <div>
                    <img
                      src='/img/iconGov@2x.png'
                      alt='Icon for Gov'
                      data-rjs='2'
                    />
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <b>
                      To participate in protocol governance and shape the future
                      of Audius.
                    </b>
                  </p>
                  <p>
                    Every aspect of Audius is governable, creating a truly
                    community-owned and operated streaming service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhitepaperCallout />
      <Newsletter />
    </div>
  )
}

export default TokenPage

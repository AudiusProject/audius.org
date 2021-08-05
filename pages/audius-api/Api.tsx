import React, { useEffect, useMemo, useState } from 'react'

import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'

import apps from './apps.json'

const frameUrls = {
  playTrack: '//jsfiddle.net/rayaudius/pyx9ckbf/38/embedded/js,result/',
  getPopularPlaylists:
    '//jsfiddle.net/rayaudius/hqgkw2rz/7/embedded/js,result/',
  searchUsers: '//jsfiddle.net/rayaudius/r5e10fqo/7/embedded/js,result/',
  getAllByArtist: '//jsfiddle.net/rayaudius/w8rx67b0/4/embedded/js,result/'
}
type Frame = keyof typeof frameUrls

const frameButtons: { frame: Frame; text: string }[] = [
  { frame: 'playTrack', text: 'Play The #1 Trending Track' },
  { frame: 'getPopularPlaylists', text: 'Get Popular Playlists' },
  { frame: 'searchUsers', text: 'Search For Artist' },
  { frame: 'getAllByArtist', text: 'Get All Songs By Artist' }
]
const ApiPage = () => {
  const [selectedFrame, setSelectedFrame] = useState<Frame>('playTrack')

  const frameUrl = useMemo(() => {
    return frameUrls[selectedFrame]
  }, [selectedFrame])

  const renderApp = ({ name, shortDescription, description, image, link }) => {
    return (
      <div className='person has-bio' data-modal='person-modal' key={name}>
        <div className='content'>
          <div className='headshot'>
            <a
              className='person-link'
              href={link}
              target='_blank'
              rel='noopener'
            >
              <svg
                className='link'
                width='23'
                height='22'
                viewBox='0 0 23 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.51729 10.8785L4.86499 9.55526C5.22235 9.20429 5.83755 9.43756 5.85607 9.93334C5.87952 10.5736 5.99807 11.2071 6.20798 11.8138C6.28123 12.0208 6.22795 12.2507 6.0707 12.4062L5.59532 12.8731C4.57846 13.8718 4.54577 15.5004 5.55355 16.5112C6.0425 17.0001 6.70994 17.2769 7.40765 17.2804C8.10535 17.2838 8.77557 17.0135 9.26945 16.5294L11.7085 14.1315C12.7288 13.1287 12.7288 11.5036 11.7085 10.5008C11.5928 10.3882 11.4671 10.2859 11.333 10.1951C11.1811 10.093 11.0875 9.92634 11.0806 9.74573C11.0648 9.3481 11.2194 8.96218 11.5069 8.68175L12.2717 7.93273C12.4725 7.73659 12.7877 7.71042 13.0191 7.87066C14.3552 8.78691 15.211 10.236 15.3575 11.8299C15.5039 13.4239 14.926 15 13.7785 16.1364L13.7654 16.1496L11.325 18.5464C9.17249 20.6605 5.67049 20.6601 3.51693 18.5464C1.36336 16.4328 1.36481 12.9922 3.51729 10.8785Z'
                  fill='#12063D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M16.8046 9.12718C17.8215 8.12848 17.8542 6.49988 16.8464 5.48905C16.3573 5.0003 15.6898 4.72355 14.9921 4.72027C14.2944 4.71699 13.6243 4.98744 13.1305 5.47157L10.6915 7.86881C9.67114 8.87158 9.67114 10.4967 10.6915 11.4995C10.8072 11.6121 10.9328 11.7144 11.067 11.8051C11.2187 11.9073 11.3122 12.074 11.319 12.2545C11.3351 12.6522 11.1805 13.0382 10.893 13.3185L10.1282 14.0693C9.92738 14.2653 9.61229 14.2915 9.38081 14.1314C8.0441 13.2152 7.18785 11.7657 7.0414 10.1713C6.89495 8.57683 7.47326 7.00029 8.62143 5.86392L8.63451 5.85072L11.075 3.45383C13.2275 1.33979 16.7294 1.34015 18.883 3.45383C21.0366 5.56752 21.0355 9.00733 18.883 11.1224L17.5353 12.4457C17.178 12.7967 16.5628 12.5634 16.5442 12.0676C16.5208 11.4274 16.4022 10.7939 16.1923 10.1872C16.1191 9.98021 16.1723 9.75029 16.3296 9.59479L16.8046 9.12718Z'
                  fill='#12063D'
                />
              </svg>
              <span>Link</span>
            </a>
            <img className='photo' src={`/img/${image}`} alt='' />
          </div>
          <div className='description'>
            <h4 className='name'>{name}</h4>
            <h5 className='title'>{shortDescription}</h5>
            <div className='bio'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='api-page'>
      <Head>
        <title>API</title>
        <OpenGraphTags
          title='Audius | API'
          path='/audius-api'
          description='It’s easy to build your own app on Audius'
        />
      </Head>

      <SubpageIntro title='API' />

      <section id='dev-details'>
        <div className='content'>
          <svg
            className='squiggle'
            aria-hidden='true'
            height='6.6'
            viewBox='0 0 46 6.6'
            width='46'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M46 6.6c-1.9 0-3.1-1.5-4.2-2.9s-2.1-2.7-3.8-2.7-2.7 1.3-3.8 2.7c-1.1 1.4-2.3 2.9-4.2 2.9-2.1 0-3.3-1.5-4.4-2.9-1-1.2-1.8-2.3-3.1-2.3s-2.4 1.1-3.5 2.3c-1.3 1.4-2.7 2.9-4.9 2.9s-3.6-1.1-4.9-2c-.9-.7-1.7-1.3-2.7-1.3-.7 0-1.2.2-1.8.4-1.1.4-2.3.9-4.7.9v-1c2.2 0 3.3-.4 4.3-.8.7-.3 1.3-.5 2.2-.5 1.3 0 2.3.7 3.3 1.5 1.1.9 2.3 1.8 4.2 1.8 1.8 0 2.9-1.3 4.2-2.6 1.2-1.3 2.4-2.6 4.2-2.6 1.8 0 2.9 1.3 3.9 2.7 1 1.3 2 2.5 3.6 2.5 1.4 0 2.4-1.2 3.4-2.5 1.2-1.5 2.5-3.1 4.7-3.1s3.5 1.6 4.6 3.1c1 1.3 2 2.5 3.4 2.5v1z' />
          </svg>
          <div className='why'>
            <div className='left'>Why Choose Audius?</div>
            <div className='right'>
              <div className='reason'>
                <div className='circle'>
                  <img src='../img/iconCheck.svg' />
                </div>
                <div>More Than 450K Tracks</div>
              </div>
              <div className='reason'>
                <div className='circle'>
                  <img src='../img/iconCheck.svg' />
                </div>
                <div>Zero Rate Limits</div>
              </div>
              <div className='reason'>
                <div className='circle'>
                  <img src='../img/iconCheck.svg' />
                </div>
                <div>Totally Free</div>
              </div>
              <div className='reason'>
                <div className='circle'>
                  <img src='../img/iconCheck.svg' />
                </div>
                <div>320kbps High Quality Audio</div>
              </div>
            </div>
          </div>

          <div className='long-description'>
            <div className='block-string-container'>
              <div className='row'>
                <div className='tile blank medium'></div>
                <div className='tile purple text-content header'>
                  <div className='tile-content'>
                    <h4>
                      Need Music For
                      <br />
                      Your Game?
                    </h4>
                  </div>
                </div>
                <div className='tile blank medium'></div>
                <div className='tile teal text-content header'>
                  <div className='tile-content'>
                    <h4>
                      Dream Of Building Your
                      <br />
                      Own Music Player?
                    </h4>
                  </div>
                </div>
                <div className='tile blank medium'></div>
                <div className='tile blank medium'></div>
              </div>
              <div className='row'>
                <div className='tile blank medium'></div>
                <div className='tile blank medium'></div>
                <div className='tile orange text-content header'>
                  <div className='tile-content'>
                    <h4>Always Wanted to Create Your Own Visualizer?</h4>
                  </div>
                </div>
                <div className='tile blank medium'></div>
                <div className='tile purple text-content header'>
                  <div className='tile-content'>
                    <h4>
                      Have an idea we
                      <br />
                      haven't thought of yet?
                    </h4>
                  </div>
                </div>
                <div className='tile blank medium'></div>
              </div>
            </div>
            <button
              className='button'
              onClick={() =>
                (window.location.href =
                  'http://audiusproject.github.io/api-docs')
              }
            >
              Read The Docs
            </button>
          </div>

          <svg
            className='squiggle'
            aria-hidden='true'
            height='6.6'
            viewBox='0 0 46 6.6'
            width='46'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M46 6.6c-1.9 0-3.1-1.5-4.2-2.9s-2.1-2.7-3.8-2.7-2.7 1.3-3.8 2.7c-1.1 1.4-2.3 2.9-4.2 2.9-2.1 0-3.3-1.5-4.4-2.9-1-1.2-1.8-2.3-3.1-2.3s-2.4 1.1-3.5 2.3c-1.3 1.4-2.7 2.9-4.9 2.9s-3.6-1.1-4.9-2c-.9-.7-1.7-1.3-2.7-1.3-.7 0-1.2.2-1.8.4-1.1.4-2.3.9-4.7.9v-1c2.2 0 3.3-.4 4.3-.8.7-.3 1.3-.5 2.2-.5 1.3 0 2.3.7 3.3 1.5 1.1.9 2.3 1.8 4.2 1.8 1.8 0 2.9-1.3 4.2-2.6 1.2-1.3 2.4-2.6 4.2-2.6 1.8 0 2.9 1.3 3.9 2.7 1 1.3 2 2.5 3.6 2.5 1.4 0 2.4-1.2 3.4-2.5 1.2-1.5 2.5-3.1 4.7-3.1s3.5 1.6 4.6 3.1c1 1.3 2 2.5 3.4 2.5v1z' />
          </svg>
        </div>
      </section>
      <section id='top' className='simple-callout inspiration'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>
              Looking for inspiration? Take a look at these outstanding apps,
              all built using our free API
            </div>
          </div>
        </div>
      </section>

      <section id='apps' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>Built On Audius</h2>
          </div>

          <div id='appContent' className='row three-columns'>
            {apps.map(renderApp)}
          </div>

          <div className='bottom'>
            <button
              className='button'
              onClick={() => (window.location.href = 'mailto:api@audius.co')}
            >
              Submit Your Own App
            </button>
            <p
              onClick={() =>
                (window.location.href =
                  'https://audiusproject.github.io/api-docs/')
              }
            >
              Learn More About The API
            </p>
          </div>
        </div>
      </section>

      <section id='demo' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>See For Yourself</h2>
          </div>
          <div className='content'>
            <div className='frame'>
              <iframe
                className='show'
                width='100%'
                height='400'
                src={frameUrl}
                allowFullScreen
                frameBorder='0'
              ></iframe>
            </div>
            <div className='selections'>
              <h2>Example API Requests</h2>
              {frameButtons.map(({ frame, text }) => (
                <button
                  className={selectedFrame === frame ? 'active' : ''}
                  onClick={() => setSelectedFrame(frame)}
                  key={frame}
                >
                  {text}
                </button>
              ))}
              <button
                className='tiny'
                onClick={() =>
                  (window.location.href =
                    'https://audiusproject.github.io/api-docs')
                }
              >
                Full API Reference
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id='newsletter'>
        <div className='container'>
          <div className='content'>
            <img src='../img/apiLogo@2x.png' />
            <div className='header'>
              <h3>
                It’s easy to build your
                <br />
                own app on Audius
              </h3>
            </div>
            <button
              className='learn-more'
              onClick={() =>
                (window.location.href =
                  'https://audiusproject.github.io/api-docs')
              }
            >
              Learn More About The Audius API
            </button>
          </div>
        </div>
        <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
          <img src='/img/newsletter-shapes.png' alt='' data-rjs='2' />
        </span>
      </section>
    </div>
  )
}

export default ApiPage

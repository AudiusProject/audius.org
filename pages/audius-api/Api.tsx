import React, { useMemo, useState } from 'react'

import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'
import CheckIcon from 'public/img/iconCheck.svg'
import LinkIcon from 'public/img/iconLink.svg'
import SquiggleIcon from 'public/img/iconSquiggle.svg'

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

const Api = () => {
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
              rel='noreferrer'
            >
              <LinkIcon />
              <span>Link</span>
            </a>
            <img
              className='photo'
              src={`/img/${image}`}
              alt={`Picture of ${name}`}
            />
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
              {[
                'More Then 450K Tracks',
                'Zero Rate Limits',
                'Totally Free',
                '320kbps High Quality Audio'
              ].map((r) => (
                <div className='reason' key={r}>
                  <div className='circle'>
                    <CheckIcon />
                  </div>
                  <div>{r}</div>
                </div>
              ))}
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
                      have&apos;t thought of yet?
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

          <SquiggleIcon />
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
            <img src='../img/apiLogo@2x.png' alt='Audius API logo' />
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

export default Api

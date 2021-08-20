import React, { useMemo, useState } from 'react'

import Head from 'next/head'

import AppThumbnail from 'components/AppThumbnail'
import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'
import IconCheck from 'public/img/iconCheck.svg'
import IconSquiggle from 'public/img/iconSquiggle.svg'

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

  return (
    <div className='api-page'>
      <Head>
        <title>API</title>
        <OpenGraphTags
          title='Audius | API'
          path='/api'
          description='It’s easy to build your own app on Audius'
        />
      </Head>

      <SubpageIntro title='API' />

      <section id='dev-details'>
        <div className='content'>
          <IconSquiggle />
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
                    <IconCheck />
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

          <IconSquiggle />
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
            {apps.map(AppThumbnail)}
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

import React, { useMemo, useState } from 'react'

import { useTranslation } from 'next-i18next'
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

const Api = () => {
  const { t } = useTranslation()

  const [selectedFrame, setSelectedFrame] = useState<Frame>('playTrack')

  const frameButtons: { frame: Frame; text: string }[] = [
    { frame: 'playTrack', text: 'Play The #1 Trending Track' },
    { frame: 'getPopularPlaylists', text: 'Get Popular Playlists' },
    { frame: 'searchUsers', text: 'Search For Artist' },
    { frame: 'getAllByArtist', text: 'Get All Songs By Artist' }
  ]

  const frameUrl = useMemo(() => {
    return frameUrls[selectedFrame]
  }, [selectedFrame])

  return (
    <div className='api'>
      <Head>
        <title>{t('navigation-api')}</title>
        <OpenGraphTags
          title='Audius | API'
          path='/api'
          description='It’s easy to build your own app on Audius'
        />
      </Head>

      <SubpageIntro title={t('navigation-api')} />

      <section id='dev-details'>
        <div className='content'>
          <IconSquiggle />
          <div className='why'>
            <div className='left'>{t('api-subtitle')}</div>
            <div className='right'>
              {[
                t('api-reason-1'),
                t('api-reason-2'),
                t('api-reason-3'),
                t('api-reason-4')
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
                    <h4>{t('api-use-case-1')}</h4>
                  </div>
                </div>
                <div className='tile blank medium'></div>
                <div className='tile teal text-content header'>
                  <div className='tile-content'>
                    <h4>{t('api-use-case-2')}</h4>
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
                    <h4>{t('api-use-case-3')}</h4>
                  </div>
                </div>
                <div className='tile blank medium'></div>
                <div className='tile purple text-content header'>
                  <div className='tile-content'>
                    <h4>{t('api-use-case-4')}</h4>
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
              {t('api-docs')}
            </button>
          </div>

          <IconSquiggle />
        </div>
      </section>
      <section id='top' className='simple-callout inspiration'>
        <div className='container'>
          <div className='content'>
            <div className='copy'>{t('api-inspiration')}</div>
          </div>
        </div>
      </section>

      <section id='apps' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('api-built-on-audius')}</h2>
          </div>

          <div id='appContent' className='row three-columns'>
            {apps.map(AppThumbnail)}
          </div>

          <div className='bottom'>
            <button
              className='button'
              onClick={() => (window.location.href = 'mailto:api@audius.co')}
            >
              {t('api-submit-app')}
            </button>
            <p
              onClick={() =>
                (window.location.href =
                  'https://audiusproject.github.io/api-docs/')
              }
            >
              {t('api-learn-more')}
            </p>
          </div>
        </div>
      </section>

      <section id='demo' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('api-example-headline')}</h2>
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
              <h2>{t('api-example-requests')}</h2>
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
                {t('api-full-reference')}
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
              <h3>{t('api-conclusion')}</h3>
            </div>
            <button
              className='learn-more'
              onClick={() =>
                (window.location.href =
                  'https://audiusproject.github.io/api-docs')
              }
            >
              {t('api-learn-more-variant')}
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

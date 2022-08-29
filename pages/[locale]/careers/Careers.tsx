import React from 'react'

import { useTranslation } from 'next-i18next'


import { FadeImage } from 'components/FadeImage'
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
              <p>{t('careers-who-1')}</p>
              <p>{t('careers-who-2')}</p>
              <p>{t('careers-who-3')}</p>
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
                <FadeImage src='/img/tulum-working.jpg' alt='Photo of Audius team' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadeImage src='/img/top-golf-bw.jpg' alt='team dinner' className='hero-image' />

      <section id='working-at' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('careers-working')}</h2>
            <p>{t('careers-working-1')}</p>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <FadeImage src='/img/bubblesoccer.jpg' alt='Photo of Audius team' />
              <p className='caption'>{t('careers-working-caption-soccer')}</p>
            </div>
            <div className='column'>
              <FadeImage src='/img/breakfast.jpg' alt='Photo of Audius team' />
              <p className='caption'>{t('careers-working-caption-breakfast')}</p>
            </div>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <FadeImage src='/img/pair-coding.jpg' alt='Photo of Audius team' />
              <p className='caption'>{t('careers-working-caption-pair')}</p>
            </div>
            <div className='column'>
              <FadeImage src='/img/floral.jpg' alt='Photo of Audius team' />
              <p className='caption'>{t('careers-working-caption-floral')}</p>
            </div>
          </div>
        </div>
      </section>
      <section id='working-at' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('careers-community')}</h2>
            <p>{t('careers-community-1')}</p>
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



      <FadeImage src='/img/team-dinner-vegas.jpg' alt='team dinner' className='hero-image' />

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
              <p><CoinFront className='icon' />{t('careers-benefits-1')}</p>
              <p><IslandTropical className='icon' />{t('careers-benefits-2')}</p>
              <p><UserDoctorHairLong className='icon' />{t('careers-benefits-3')}</p>
              <p><PiggyBank className='icon' />{t('careers-benefits-4')}</p>
              <p><GuitarElectric className='icon' />{t('careers-benefits-5')}</p>
              <p><GraduationCap className='icon' />{t('careers-benefits-6')}</p>
            </div>
            <div className='column'>
              <p><ChairOffice className='icon' />{t('careers-benefits-7')}</p>
              <p><HeadSideHeart className='icon' />{t('careers-benefits-8')}</p>
              <p><PlaneEngines className='icon' />{t('careers-benefits-9')}</p>
              <p><PeopleGroup className='icon' />{t('careers-benefits-10')}</p>
              <p><BabyCarriage className='icon' />{t('careers-benefits-11')}</p>
            </div>
          </div>
        </div>
          <div className='footnote'>
            <p>Cigna&nbsp;<a target="_blank" href="https://www.cigna.com/legal/compliance/machine-readable-files" rel="noreferrer">Machine Readable Files</a></p>
          </div>
      </section>

      <section id='job-openings' className='bios'>
        <div className='container'>
          <div className='header'>
            <h2>{t('careers-jobs')}</h2>
          </div>
          <div className='row two-columns'>
            <div className='column'>
              <h2>{t('careers-jobs-engineering')}</h2>
              <a href="https://jobs.lever.co/audius/28d90111-c18d-49ec-a44d-8577fa4e58bc" target="_blank" rel="noreferrer">
                <p>Software Engineer - Frontend</p>
              </a>
              <a href="https://jobs.lever.co/audius/06e37352-9e96-4932-8ea6-43b4cf8f1a2b" target="_blank" rel="noreferrer">
                <p>Software Engineer - Full Stack</p>
              </a>
              <a href="https://jobs.lever.co/audius/fa274c08-181a-439b-9739-52c6c7ba1f44" target="_blank" rel="noreferrer">
                <p>Software Engineer - Backend</p>
              </a>
              <a href="https://jobs.lever.co/audius/79c3fed6-e205-4631-88f2-7f14f571b3e6" target="_blank" rel="noreferrer">
                <p>Software Engineer - Smart Contracts</p>
              </a>
              <a href="https://jobs.lever.co/audius/43dfeeed-c525-4d84-bbba-683086001342" target="_blank" rel="noreferrer">
                <p>Software Engineer - Infrastructure</p>
              </a>
            </div>
            <div className='column'>
              <h2>{t('careers-jobs-design')}</h2>
              <a href="https://jobs.lever.co/audius/3084c37b-adcd-4a2a-8b8a-0b60605c5f65" target="_blank" rel="noreferrer">
                <p>Senior Motion Designer</p>
              </a>
              <a href="https://jobs.lever.co/audius/763221b9-2512-492c-9aae-1564b02cc2ed" target="_blank" rel="noreferrer">
                <p>Product Designer</p>
              </a>
            </div>
          </div>
          <div className='row cta'>
            <a
              className='standard-button purple'
              href="https://jobs.lever.co/audius"
              target="_blank" rel="noreferrer"
            >
              {'All openings'}
            </a>
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
          <FadeImage
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

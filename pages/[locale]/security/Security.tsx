import React from 'react'

import { useTranslation, Trans } from 'next-i18next'
import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'

const Security = () => {
  const { t } = useTranslation()

  return (
    <div className='security mask-animation-fix'>
      <Head>
        <title>{t('navigation-security')}</title>
        <OpenGraphTags title='Audius | Security' path='/security' />
      </Head>

      <SubpageIntro
        title={t('navigation-security')}
        description={
          <>
            <Trans i18nKey='security-description'>
              Security is vital to Audius&apos; mission. We work hard to ensure
              that data is always safe. Our{' '}
              <a href='https://audius.co/legal/privacy-policy'>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href='https://audius.co/legal/terms-of-use'>Terms of Use</a>{' '}
              describe our data-use practices, and we encourage third-parties to
              explore our{' '}
              <a href='https://github.com/AudiusProject'>Codebases</a> and
              respectfully disclose vulnerabilities & issues.
            </Trans>
          </>
        }
      />

      <section id='bounty' className='section bios'>
        <div className='container'>
          <div className='header'>
            <h2>Bug Bounty Policy</h2>
            <p>
              <Trans i18nKey='security-disclosure-guidelines'>
                We generally adhere to HackerOne&apos;s{' '}
                <a href='https://www.hackerone.com/disclosure-guidelines'>
                  disclosure guidelines
                </a>
                .
              </Trans>
            </p>
          </div>
          <div className='content'>
            <h2>{t('security-disclosure-process')}</h2>
            <ol>
              <li>
                <Trans i18nKey='security-disclosure-process-1'>
                  Safely disclose issue and applicable proof-of-concept or steps
                  for reproduction to{' '}
                  <a href='mailto:security@audius.co'>security@audius.co</a>
                </Trans>
              </li>
              <li>
                <Trans i18nKey='security-disclosure-process-2'>
                  We determine severity of issue together, following informal
                  CVSS guidelines (
                  <a href='https://www.atlassian.com/trust/security/security-severity-levels'>
                    example
                  </a>
                  ), producing classification (low, medium, high, critical)
                </Trans>
              </li>
              <li>{t('security-disclosure-process-3')}</li>
              <li>{t('security-disclosure-process-4')}</li>
              <li>{t('security-disclosure-process-5')}</li>
            </ol>
            <h2>{t('security-bounty')}</h2>
            <ul>
              <li>{t('security-bounty-1')}</li>
              <li>{t('security-bounty-2')}</li>
              <li>{t('security-bounty-3')}</li>
              <li>{t('security-bounty-4')}</li>
            </ul>
            <h2>{t('security-not-eligible')}</h2>
            <ul>
              <li>{t('security-not-eligible-1')}</li>
              <li>{t('security-not-eligible-2')}</li>
              <li>{t('security-not-eligible-3')}</li>
              <li>{t('security-not-eligible-4')}</li>
              <li>{t('security-not-eligible-5')}</li>
              <li>{t('security-not-eligible-6')}</li>
              <li>{t('security-not-eligible-7')}</li>
              <li>{t('security-not-eligible-8')}</li>
              <li>{t('security-not-eligible-9')}</li>
              <li>{t('security-not-eligible-10')}</li>
              <li>
                <Trans i18nKey='security-not-eligible-11'>
                  Token reuse, password poisoning, or account revocation with
                  regard to the documented security considerations in
                  <a href='https://audiusproject.github.io/hedgehog-docs/'>
                    Hedgehog
                  </a>
                </Trans>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='section bios'>
        <div className='container'>
          <div className='header'>
            <h2>Other Concerns</h2>
          </div>
          <div className='content'>
            <p>
              <Trans i18nKey='security-other-concerns-description'>
                All other security concerns should be directed at{' '}
                <a href='mailto:security@audius.co'>security@audius.co</a>.
              </Trans>
            </p>
          </div>
        </div>

        <span
          className='parallax-sphere sphere orange'
          data-parallax='3'
        ></span>
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
      </section>
    </div>
  )
}

export default Security

import React from 'react'

import { useTranslation, Trans } from 'next-i18next'

import Head from 'components/Head'
import SubpageIntro from 'components/SubpageIntro'

const Security = () => {
  const { t } = useTranslation()

  return (
    <div className='security mask-animation-fix'>
      <Head title={t('navigation-security')} path='/security' />

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
                We generally adhere to disclosure guidelines from
                <a href='https://www.hackerone.com/disclosure-guidelines'>HackerOne</a>
                and <a href='https://immunefi.com/severity-system/'>Immunefi</a>
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
            <h3>Smart Contracts (Ethereum, Solana)</h3>
            <ul>
              <li>{t('security-bounty-smart-contracts-1')}</li>
              <li>{t('security-bounty-smart-contracts-2')}</li>
              <li>{t('security-bounty-smart-contracts-3')}</li>
              <li>{t('security-bounty-smart-contracts-4')}</li>
            </ul>
            <h3>Websites & Apps</h3>
            <ul>
              <li>{t('security-bounty-web-1')}</li>
              <li>{t('security-bounty-web-2')}</li>
              <li>{t('security-bounty-web-3')}</li>
              <li>{t('security-bounty-web-4')}</li>
            </ul>
            <h2>Smart Contract Assets</h2>
            <ul>
              <li>Registry: <a href="https://etherscan.io/address/0xd976d3b4f4e22a238c1A736b6612D22f17b6f64C">0xd976d3b4f4e22a238c1A736b6612D22f17b6f64C</a></li>
              <li>Token: <a href="https://etherscan.io/address/0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998">0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998</a></li>
              <li>Governance: <a href="https://etherscan.io/address/0x4DEcA517D6817B6510798b7328F2314d3003AbAC">0x4DEcA517D6817B6510798b7328F2314d3003AbAC</a></li>
              <li>Staking: <a href="https://etherscan.io/address/0xe6D97B2099F142513be7A2a068bE040656Ae4591">0xe6D97B2099F142513be7A2a068bE040656Ae4591</a></li>
              <li>DelegateManager: <a href="https://etherscan.io/address/0x4d7968ebfD390D5E7926Cb3587C39eFf2F9FB225">0x4d7968ebfD390D5E7926Cb3587C39eFf2F9FB225</a></li>
              <li>ClaimsManager: <a href="https://etherscan.io/address/0x44617F9dCEd9787C3B06a05B35B4C779a2AA1334">0x44617F9dCEd9787C3B06a05B35B4C779a2AA1334</a></li>
              <li>ServiceTypeManager: <a href="https://etherscan.io/address/0x9EfB0f4F38aFbb4b0984D00C126E97E21b8417C5">0x9EfB0f4F38aFbb4b0984D00C126E97E21b8417C5</a></li>
              <li>ServiceProviderFactory: <a href="https://etherscan.io/address/0xD17A9bc90c582249e211a4f4b16721e7f65156c8">0xD17A9bc90c582249e211a4f4b16721e7f65156c8</a></li>
              <li>EthRewardsManager: <a href="https://etherscan.io/address/0x5aa6B99A2B461bA8E97207740f0A689C5C39C3b0">0x5aa6B99A2B461bA8E97207740f0A689C5C39C3b0</a></li>
              <li>WormholeClient: <a href="https://etherscan.io/address/0x6E7a1F7339bbB62b23D44797b63e4258d283E095">0x6E7a1F7339bbB62b23D44797b63e4258d283E095</a></li>
              <li>TrustedNotifierManager: <a href="https://etherscan.io/address/0x6f08105c8CEef2BC5653640fcdbBE1e7bb519D39">0x6f08105c8CEef2BC5653640fcdbBE1e7bb519D39</a></li>
              <li>Claimable Tokens: <a href="https://explorer.solana.com/address/Ewkv3JahEFRKkcJmpoKB7pXbnUHwjAyXiwEo4ZY2rezQ">Ewkv3JahEFRKkcJmpoKB7pXbnUHwjAyXiwEo4ZY2rezQ</a></li>
              <li>Rewards Manager: <a href="https://explorer.solana.com/address/DDZDcYdQFEMwcu2Mwo75yGFjJ1mUQyyXLWzhZLEVFcei">DDZDcYdQFEMwcu2Mwo75yGFjJ1mUQyyXLWzhZLEVFcei</a></li>
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
              <li>{t('security-not-eligible-12')}</li>
            </ul>
          </div>
        </div>
      </section >

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
    </div >
  )
}

export default Security

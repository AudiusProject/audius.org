import React from 'react'

import Head from 'next/head'

import OpenGraphTags from 'components/OpenGraphTags'
import SubpageIntro from 'components/SubpageIntro'

const Security = () => {
  return (
    <div className='security mask-animation-fix'>
      <Head>
        <title>Security</title>
        <OpenGraphTags title='Audius | Security' path='/security' />
      </Head>

      <SubpageIntro
        title='Security'
        description={
          <p>
            Security is vital to Audius&apos; mission. We work hard to ensure
            that data is always safe. Our{' '}
            <a href='https://audius.co/legal/privacy-policy'>Privacy Policy</a>{' '}
            and <a href='https://audius.co/legal/terms-of-use'>Terms of Use</a>{' '}
            describe our data-use practices, and we encourage third-parties to
            explore our <a href='https://github.com/AudiusProject'>Codebases</a>{' '}
            and respectfully disclose vulnerabilities & issues.
          </p>
        }
      />

      <section id='bounty' className='section bios'>
        <div className='container'>
          <div className='header'>
            <h2>Bug Bounty Policy</h2>
            <p>
              We generally adhere to HackerOne&apos;s{' '}
              <a href='https://www.hackerone.com/disclosure-guidelines'>
                disclosure guidelines
              </a>
              .
            </p>
          </div>
          <div className='content'>
            <h2>Disclosure process</h2>
            <ol>
              <li>
                Safely disclose issue and applicable proof-of-concept or steps
                for reproduction to{' '}
                <a href='mailto:security@audius.co'>security@audius.co</a>
              </li>
              <li>
                We determine severity of issue together, following informal CVSS
                guidelines (
                <a href='https://www.atlassian.com/trust/security/security-severity-levels'>
                  example
                </a>
                ), producing classNameification (low, medium, high, critical)
              </li>
              <li>Bounty is paid out</li>
              <li>
                Fix is produced, rolled out, and reporter can disclose issue
                publicly
              </li>
              <li>We produce & publish documentation of issue</li>
            </ol>
            <h2>Bounty</h2>
            <ul>
              <li>&quot;Critical&quot; - $5,000</li>
              <li>&quot;High&quot; - $2,000</li>
              <li>&quot;Medium&quot; - $500</li>
              <li>&quot;Low&quot; - $0 - $100</li>
            </ul>
            <h2>Not eligible for reward</h2>
            <ul>
              <li>Third-party applications that use Audius APIs</li>
              <li>XSS requiring legacy browsers</li>
              <li>Self-XSS</li>
              <li>SSL/TLS best practices</li>
              <li>
                Missing HTTP header which does not lead to a direct
                vulnerability
              </li>
              <li>
                Missing cookie flags, unless the absence can be abused by a
                legitimate workflow
              </li>
              <li>Clickjacking without demonstration of impact</li>
              <li>Account enumeration through brute-force attacks</li>
              <li>CSV command execution</li>
              <li>Best practice recommendations with no proof-of-concept</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='' className='section bios'>
        <div className='container'>
          <div className='header'>
            <h2>Other Concerns</h2>
          </div>
          <div className='content'>
            <p>
              All other security concerns should be directed at{' '}
              <a href='mailto:security@audius.co'>security@audius.co</a>.
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

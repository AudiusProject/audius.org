import React from 'react'

import StyledLink from './StyledLink'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='boilerplate'>
            <div className='logo'>
              <img src='/img/audius-footer.png' data-rjs='2' alt='Audius' />
            </div>
            <h3>Empowering Artists</h3>
          </div>
          <div className='navigation'>
            <nav className='sitemap'>
              <ul>
                <li>
                  <StyledLink href='/protocol'>Protocol</StyledLink>
                </li>
                <li>
                  <StyledLink href='/api'>API</StyledLink>
                </li>
                <li>
                  <StyledLink href='/token'>Token</StyledLink>
                </li>
                <li>
                  <StyledLink href='/team'>Team</StyledLink>
                </li>
                <li>
                  <StyledLink href='/careers'>Careers</StyledLink>
                </li>
                <li>
                  <a
                    href='https://whitepaper.audius.co'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    White Paper
                  </a>
                </li>
                <li>
                  <StyledLink href='/security'>Security</StyledLink>
                </li>
              </ul>
            </nav>
            <nav className='social'>
              <h4>Connect</h4>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://twitter.com/AudiusProject'
                  >
                    <svg
                      className='twitter'
                      viewBox='0 0 31.9 27.9'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path d='M31.9 3.3c-1.2.6-2.4.9-3.8 1.1 1.4-.9 2.4-2.2 2.9-3.9-1.3.8-2.7 1.4-4.2 1.7-1.1-1.3-2.8-2.2-4.7-2.2-3.6 0-6.5 3.1-6.5 7 0 .5.1 1.1.2 1.6-5.5-.2-10.4-3.1-13.6-7.3-.6 1-.9 2.2-.9 3.5 0 2.4 1.2 4.6 2.9 5.9-1.1 0-2.1-.3-3-.9v.1c0 3.4 2.3 6.2 5.2 6.9-.4.2-1 .2-1.6.2-.4 0-.8 0-1.2-.1.8 2.8 3.2 4.8 6.1 4.9-2.2 1.9-5.1 3-8.1 3-.5 0-1.1 0-1.6-.1 2.9 2 6.3 3.2 10 3.2 12 0 18.6-10.7 18.6-20v-.9c1.3-1 2.4-2.3 3.3-3.7z' />
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://t.me/Audius'
                  >
                    <svg
                      className='telegram'
                      viewBox='0 0 17.6 15.3'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        d='M.3 7.3l4 1.5 1.6 5c.1.3.5.4.8.2l2.3-1.8c.2-.2.6-.2.8 0l4.1 3c.3.2.7.1.7-.3l3-14.3c.1-.4-.3-.7-.6-.5l-16.7 6.3c-.4.2-.4.8 0 .9zm5.4.7l7.9-4.9c.1-.1.3.1.2.2l-6.6 6.2c-.2.2-.4.5-.4.8l-.2 1.6c0 .2-.3.2-.4 0l-.9-3c-.1-.3.1-.7.4-.9z'
                        id='XMLID_2_'
                      />
                    </svg>
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/company/audius-project'
                  >
                    <svg
                      className='linkedin'
                      viewBox='0 0 30.3 27.8'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M.8 8.9h5.9v18.9h-5.9zM22.8 8.7c-3.4 0-5.5 1.8-5.9 3.1v-3h-6.6c.1 1.6 0 18.9 0 18.9h6.6v-10.1c0-.6 0-1.1.1-1.5.5-1.1 1.4-2.3 3.2-2.3 2.3 0 3.3 1.7 3.3 4.3v9.8h6.7v-10.6c.1-5.9-3.2-8.6-7.4-8.6zM3.6 0c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.4 3.6-3.3s-1.3-3.3-3.5-3.3z' />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/AudiusProject'
                  >
                    <svg
                      className='github'
                      viewBox='0 0 32.6 31.8'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path d='M16.3 0c-9 0-16.3 7.3-16.3 16.3 0 7.2 4.7 13.3 11.1 15.5.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.7-4.4-.1-.3-.7-2 .2-4.2 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5 1.4 0 2.8.2 4.1.5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.1 1.7 2.6 1.7 4.4 0 6.3-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3v4.5c0 .4.3.9 1.1.8 6.5-2.2 11.1-8.3 11.1-15.5-.1-9-7.4-16.3-16.4-16.3z' />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://medium.com/audius'
                  >
                    <svg
                      className='medium'
                      viewBox='0 0 131 104'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path d='M15.5 21.2c.2-1.6-.5-3.2-1.7-4.3l-12.1-14.7v-2.2h38l29.3 64.4 25.8-64.4h36.2v2.2l-10.5 10c-.9.7-1.3 1.8-1.2 2.9v73.7c-.2 1.1.3 2.2 1.2 2.9l10.2 10v2.2h-51.3v-2.2l10.6-10.2c1-1 1-1.3 1-2.9v-59.6l-29.4 74.7h-4l-34.2-74.7v50.1c-.3 2.1.4 4.2 1.9 5.7l13.7 16.8v2.2h-39v-2.2l13.8-16.7c1.5-1.5 2.1-3.7 1.8-5.7v-58z' />
                    </svg>
                    <span>Medium</span>
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.reddit.com/r/audius'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                    >
                      <path d='M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z' />
                    </svg>
                    <span>Reddit</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='sign-off'>
          <p className='copyright'>
            <span className='mobile-break'>
              © 2021 Audius, Inc. All Rights Reserved.
            </span>
            <br />
            <span className='mobile-break'>
              Made with <span className='love'>love</span> in SF & LA
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

import { StyledLink } from './StyledLink'

const Header = () => {
  return (
    <>
      <button id='menu-button' className='mobile-only'>
        <svg
          className='squiggle'
          aria-hidden='true'
          viewBox='0 0 28.1 5.4'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M28.1 5.4c-1.5 0-2.4-1.1-3.1-2-.7-.9-1.1-1.4-1.8-1.4s-1.1.5-1.8 1.4c-.7.9-1.6 2-3.1 2-1.6 0-2.5-1.1-3.2-2-.6-.7-.9-1.1-1.4-1.1-.5 0-1 .5-1.6 1.2-.8.9-1.9 2-3.5 2-1.6-.1-2.7-.9-3.4-1.4-.6-.5-.9-.7-1.3-.7-.3 0-.5.1-.9.2-.6.3-1.4.6-3 .6v-2c1.2 0 1.8-.2 2.4-.4.5-.2.9-.3 1.6-.3 1-.1 1.8.5 2.4 1 .7.5 1.3.9 2.2.9.7 0 1.3-.5 2.1-1.4.8-.8 1.7-1.8 3.1-1.8 1.4 0 2.3 1 2.9 1.9.6.8 1 1.3 1.6 1.3.5 0 .9-.5 1.6-1.3.8-1 1.7-2.2 3.4-2.2s2.6 1.2 3.4 2.2c.6.8 1 1.3 1.6 1.3v2z' />
        </svg>
        <svg
          className='close-menu'
          aria-hidden='true'
          height='13.6'
          viewBox='0 0 13.6 13.6'
          width='13.6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.6 2l-2-2-4.8 4.8-4.8-4.8-2 2 4.8 4.8-4.8 4.8 2 2 4.8-4.8 4.8 4.8 2-2-4.8-4.8z' />
        </svg>
        <span>Show/Hide Main Menu</span>
      </button>

      <header className='main-header'>
        <h1 className='logo'>
          <StyledLink href='/'>
            <img src='/img/audius.png' data-rjs='2' alt='Audius' />
            <span>Audius</span>
          </StyledLink>
        </h1>
        <nav className='menu'>
          <div>
            <ul>
              <li className='mobile-only'>
                <StyledLink href='/'>Home</StyledLink>
              </li>
              <li>
                <StyledLink href='/protocol'>Protocol</StyledLink>
              </li>
              <li>
                <StyledLink href='/audius-api'>API</StyledLink>
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
                  className='standard-button purple'
                  href='https://whitepaper.audius.co/'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  White Paper
                </a>
              </li>
            </ul>
          </div>
          <span className='bg-shapes'>
            <span></span>
          </span>
        </nav>
      </header>
    </>
  )
}

export default Header

import React from 'react'

import StyledLink from 'components/StyledLink'
import IconClose from 'public/img/iconClose.svg'
import IconSquiggle from 'public/img/iconSquiggle.svg'

const Header = () => {
  return (
    <>
      <button id='menu-button' className='mobile-only'>
        <IconSquiggle />
        <IconClose />
        <span>Show/Hide Main Menu</span>
      </button>

      <header className='main-header'>
        <h1 className='logo'>
          <StyledLink href='/home'>
            <img src='/img/audius.png' data-rjs='2' alt='Audius' />
            <span>Audius</span>
          </StyledLink>
        </h1>
        <nav className='menu'>
          <div>
            <ul>
              <li className='mobile-only'>
                <StyledLink href='/home'>Home</StyledLink>
              </li>
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
                  className='standard-button purple'
                  href='https://whitepaper.audius.co/'
                  target='_blank'
                  rel='noopener noreferrer'
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

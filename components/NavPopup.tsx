import React, { ReactNode, useRef, useState } from 'react'

import { useTransition, animated } from 'react-spring'

import IconNavigationCaret from '/public/img/iconNavigationCaret.svg'

import StyledLink from './StyledLink'

export type NavPopupProps = {
  disableHover?: boolean
  icon?: () => ReactNode
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  label: string
  variant?: 'primary' | 'secondary'
  xOffset?: number
  items: {
    href: string
    icon: () => ReactNode
    label: string
    locale?: string
  }[]
}

const NavPopup: React.FC<NavPopupProps> = ({
  disableHover,
  icon,
  items,
  isOpen,
  label,
  setIsOpen,
  variant = 'primary',
  xOffset = -8
}) => {
  const anchorRef = useRef<HTMLDivElement>()

  const mobile = (callback: () => void) => {
    if (window.innerWidth < 1200) {
      callback()
    }
  }

  const desktop = (callback: () => void) => {
    if (window.innerWidth >= 1200) {
      callback()
    }
  }

  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: `scale(0)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0)` },
    config: {
      tension: 310,
      friction: 25,
      clamp: true
    }
  })

  const handleMouseEnter = () => {
    if (disableHover) {
      return
    }

    if (window.innerWidth >= 1200) {
      setIsOpen(true)
    }
  }

  const handleClick = () => {
    if (window.innerWidth < 1200) {
      setIsOpen(!isOpen)
    } else {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1200) {
      setIsOpen(false)
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      className={`nav-popup-container ${variant} ${isOpen ? 'open' : ''}`}
    >
      <div className='menu-item menu-dropdown-trigger' ref={anchorRef}>
        {icon?.()}
        <div>{label}</div>
        <div className='caret'>
          <IconNavigationCaret />
        </div>
      </div>

      {transitions(
        (styles, visible) =>
          visible && (
            <animated.div style={styles}>
              <div className='nav-popup' style={{ marginLeft: xOffset }}>
                <div className='nav-popup-menu'>
                  <ul>
                    {items.map(
                      ({ label: itemLabel, icon: itemIcon, href, locale }) => {
                        const renderMenuItem = () => (
                          <li
                            className='menu-item'
                            onClick={(e) => {
                              e.stopPropagation()
                              if (window.innerWidth >= 1200) {
                                setIsOpen(false)
                              }
                            }}
                          >
                            {itemIcon()}
                            <div>{itemLabel}</div>
                          </li>
                        )

                        const isExternal = String(href).match(/^http/)

                        return isExternal ? (
                          <a
                            href={href}
                            target='_blank'
                            rel='noopener noreferrer'
                            key={itemLabel}
                          >
                            {renderMenuItem()}
                          </a>
                        ) : (
                          <StyledLink
                            href={href}
                            locale={locale}
                            key={itemLabel}
                          >
                            {renderMenuItem()}
                          </StyledLink>
                        )
                      }
                    )}
                  </ul>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  )
}

export default NavPopup

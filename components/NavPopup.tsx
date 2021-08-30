import React, { ReactNode, useRef, useState } from 'react'

import { useTransition, animated } from 'react-spring'

import IconNavigationCaret from '/public/img/iconNavigationCaret.svg'

import StyledLink from './StyledLink'

type NavPopupProps = {
  disableHover?: boolean
  icon?: () => ReactNode
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
  label,
  variant = 'primary',
  xOffset = -8
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const anchorRef = useRef<HTMLDivElement>()

  const transitions = useTransition(isPopupVisible, {
    from: { opacity: 0, transform: `scale(0)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0)` },
    config: {
      tension: 310,
      friction: 25,
      clamp: true
    }
  })

  return (
    <div
      onMouseEnter={disableHover ? undefined : () => setIsPopupVisible(true)}
      onClick={() => setIsPopupVisible(true)}
      onMouseLeave={() => setIsPopupVisible(false)}
      className={`nav-popup-container ${variant}`}
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
                            onClick={() => setIsPopupVisible(false)}
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

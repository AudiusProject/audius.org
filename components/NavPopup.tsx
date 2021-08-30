import React, { ReactNode, useRef, useState } from 'react'

import { useTransition, animated } from 'react-spring'

import StyledLink from './StyledLink'

type NavPopupProps = {
  label: string
  icon?: () => ReactNode
  variant?: 'primary' | 'secondary'
  xOffset?: number
  items: {
    label: string
    icon: () => ReactNode
    href: string
    locale?: string
  }[]
}

const NavPopup: React.FC<NavPopupProps> = ({
  items,
  label,
  icon,
  variant = 'primary',
  xOffset
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const anchorRef = useRef<HTMLDivElement>()

  const transitions = useTransition(isPopupVisible, {
    from: { opacity: 0, transform: `scale(0)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0)` },
    config: {
      tension: 250,
      clamp: true
    }
  })

  return (
    <div
      onMouseEnter={() => setIsPopupVisible(true)}
      onMouseLeave={() => setIsPopupVisible(false)}
      className={`nav-popup-container ${variant}`}
    >
      <div className='menu-item menu-item-label' ref={anchorRef}>
        {icon?.()}
        <div>{label}</div>
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
                        return (
                          <StyledLink
                            href={href}
                            locale={locale}
                            key={itemLabel}
                          >
                            <li className='menu-item'>
                              <div
                                className='menu-item-label'
                                onClick={() => setIsPopupVisible(false)}
                              >
                                {itemIcon()}
                                <div>{itemLabel}</div>
                              </div>
                            </li>
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

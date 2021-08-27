import React, { useRef, useState } from 'react'

import { useTranslation } from 'next-i18next'
import { useTransition, animated } from 'react-spring'

import StyledLink from './StyledLink'

type NavPopupProps = {
  labelKey: string
  items: {
    labelKey: string
    icon: any
    href: string
  }[]
}

const NavPopup: React.FC<NavPopupProps> = ({ items, labelKey }) => {
  const { t } = useTranslation()
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
      className='nav-popup-container'
    >
      <div className='menu-item menu-item-label' ref={anchorRef}>
        <div>{t(labelKey)}</div>
      </div>

      {transitions(
        (styles, visible) =>
          visible && (
            <animated.div style={styles}>
              <div className='nav-popup'>
                <ul>
                  {items.map(({ labelKey: itemLabelKey, icon: Icon, href }) => {
                    return (
                      <StyledLink href={href}>
                        <li className='menu-item'>
                          <div
                            className='menu-item-label'
                            onClick={() => setIsPopupVisible(false)}
                          >
                            <Icon height={21} width={21} />
                            <div>{t(itemLabelKey)}</div>
                          </div>
                        </li>
                      </StyledLink>
                    )
                  })}
                </ul>
              </div>
            </animated.div>
          )
      )}
    </div>
  )
}

export default NavPopup

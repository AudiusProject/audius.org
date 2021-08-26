import React, { ReactNode, useRef, useState } from 'react'

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
    from: { height: '0%', opacity: 0 },
    enter: { height: '100%', opacity: 1 },
    leave: { height: '0%', opacity: 0 }
  })

  return (
    <div
      onMouseEnter={() => setIsPopupVisible(true)}
      onMouseLeave={() => setIsPopupVisible(false)}
    >
      <div className='menu-item' ref={anchorRef}>
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
                      <li className='menu-item'>
                        <StyledLink href={href}>
                          <div className='menu-item-label'>
                            <Icon height={21} width={21} />
                            <div>{t(itemLabelKey)}</div>
                          </div>
                        </StyledLink>
                      </li>
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

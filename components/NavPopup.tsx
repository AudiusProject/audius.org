import React, { useRef, useState } from 'react'

import { useTransition, animated } from 'react-spring'

type NavPopupProps = {
  label: string
}

const NavPopup: React.FC<NavPopupProps> = ({ label }) => {
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
        {label}
      </div>

      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <div className='nav-popup-container'>
                <div className='nav-popup'>
                  <ul>
                    <li className='menu-item'>Hello</li>
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

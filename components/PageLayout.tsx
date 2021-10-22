import React, { useEffect, useState } from 'react'

import Footer from 'components/Footer'

import Header from './Header'
import Modal from './Modal'

const PageLayout: React.FC = ({ children }) => {
  const [showStickyHeader, setShowStickyHeader] = useState(false)
  const isDesktop = () =>
    typeof window !== 'undefined' && window.innerWidth >= 1020

  // Set up scroll listener for sticky header on desktop
  useEffect(() => {
    if (isDesktop()) {
      const scrollListener = () => {
        if (window.scrollY > window.innerHeight / 2) {
          setShowStickyHeader(true)
        } else {
          setShowStickyHeader(false)
        }
      }
      window.addEventListener('scroll', scrollListener)

      return () => window.removeEventListener('scroll', scrollListener)
    }
  }, [isDesktop])

  return (
    <div>
      <Header />
      {showStickyHeader && <Header isClone />}
      {/* Disabling securities notice for now */}
      {/* <SecuritiesNotice /> */}
      <main>{children}</main>
      <Modal />
      <Footer />
    </div>
  )
}

export default PageLayout

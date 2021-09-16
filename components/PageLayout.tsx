import React from 'react'

import Footer from 'components/Footer'

import Header from './Header'
import Modal from './Modal'

const PageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {/* Disabling securities notice for now */}
      {/* <SecuritiesNotice /> */}
      <main>{children}</main>
      <Modal />
      <Footer />
    </div>
  )
}

export default PageLayout

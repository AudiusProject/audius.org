import React from 'react'

import Footer from 'components/Footer'

import Header from './Header'
import Modal from './Modal'
import SecuritiesNotice from './SecuritiesNotice'

const PageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <SecuritiesNotice />
      <main>{children}</main>
      <Modal />
      <Footer />
    </div>
  )
}

export default PageLayout

import React from 'react'

import Footer from 'components/Footer'

import Header from './Header'
import Modal from './Modal'
import SecuritiesNotice from './SecuritiesNotice'

export const PageLayout: React.FC = ({ children }) => {
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

import React from 'react'

import Footer from 'components/Footer'

import SecuritiesNotice from './SecuritiesNotice'
import Header from './Header'
import Modal from './Modal'

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

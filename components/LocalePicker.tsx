import React from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import NavPopup from './NavPopup'

const renderFlag = (src: string) => () =>
  (
    <div className='icon'>
      <img src={src} alt='language flag' />
    </div>
  )

const localeDetails = {
  en: {
    label: 'ENG',
    icon: renderFlag('/img/iconFlagUnitedKingdom.png')
  },
  es: {
    label: 'SPA',
    icon: renderFlag('/img/iconFlagMexico.png')
  },
  zh: {
    label: 'CHN',
    icon: renderFlag('/img/iconFlagChina.png')
  }
}

const LocalePicker = () => {
  const router = useRouter()
  const { i18n } = useTranslation()

  const locale = localeDetails[i18n.language]
  const items = Object.entries(localeDetails)
    .filter(([key]) => key !== i18n.language)
    .map(([key, value]) => ({
      ...value,
      pathname: router.pathname,
      locale: key
    }))

  return (
    <div>
      <NavPopup {...locale} items={items} variant='secondary' xOffset={6} />
    </div>
  )
}

export default LocalePicker

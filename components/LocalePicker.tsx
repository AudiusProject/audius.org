import React from 'react'

import { useTranslation } from 'next-i18next'

import iconFlagUnitedKingdom from 'public/img/iconFlagUnitedKingdom.png'
import iconFlagChina from 'public/img/iconFlagChina.png'
import iconFlagMexico from 'public/img/iconFlagMexico.png'

import Image from 'next/image'

import NavPopup from './NavPopup'
import { useRouter } from 'next/router'

const renderFlag = (src: StaticImageData) => () =>
  (
    <div className='icon'>
      <Image src={src} height={26} width={26} layout='fixed' />
    </div>
  )

const localeDetails = {
  en: {
    label: 'ENG',
    icon: renderFlag(iconFlagUnitedKingdom)
  },
  es: {
    label: 'SPA',
    icon: renderFlag(iconFlagMexico)
  },
  zh: {
    label: 'CHN',
    icon: renderFlag(iconFlagChina)
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

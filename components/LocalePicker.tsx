import React from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import NavPopup, { NavPopupProps } from 'components/NavPopup'

const renderFlag = (src: string) => () =>
  (
    <div className='icon'>
      <img src={src} />
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

type LocalePickerProps = Pick<NavPopupProps, 'isOpen' | 'setIsOpen'>

const LocalePicker = (props: LocalePickerProps) => {
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
    <div className='locale-picker'>
      <NavPopup
        {...props}
        {...locale}
        items={items}
        variant='secondary'
        xOffset={1}
        disableHover
      />

      {/* Preload the flag pngs */}
      {Object.values(localeDetails).map(({ label, icon }) => (
        <div key={label} style={{ display: 'none' }}>
          {icon()}
        </div>
      ))}
    </div>
  )
}

export default LocalePicker

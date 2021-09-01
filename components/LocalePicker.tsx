import React from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import NavPopup, { NavPopupProps } from 'components/NavPopup'

const renderFlag = (flag: string) => () =>
  <div className={`icon ${flag}`}></div>

const localeDetails = {
  en: {
    label: 'ENG',
    icon: renderFlag('united-kingdom')
  },
  es: {
    label: 'SPA',
    icon: renderFlag('mexico')
  },
  zh: {
    label: 'CHN',
    icon: renderFlag('china')
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
    </div>
  )
}

export default LocalePicker

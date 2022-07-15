import React from 'react'

import { useTranslation } from 'next-i18next'

import IconLink from 'public/img/iconLink.svg'

import { FadeImage } from './FadeImage'

type AppThumbnailProps = {
  name: string
  image: string
  link: string
}

const AppThumbnail = ({ name, image, link }: AppThumbnailProps) => {
  const nameKey = name.replace(/ /g, '-').toLowerCase()
  const { t } = useTranslation('apps')

  return (
    <div className='person has-bio' data-modal='person-modal' key={name}>
      <div className='content'>
        <div className='headshot'>
          <a
            className='person-link'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <IconLink />
            <span>Link</span>
          </a>
          <FadeImage
            containerClassName='appImageWrapper'
            className='photo'
            src={`/img/${image}`}
            alt={`Picture of ${name}`}
          />
        </div>
        <div className='description'>
          <h4 className='name'>{name}</h4>
          <div className='title appDescription'>
            {t(`${nameKey}-short-description`)}
          </div>
          <div className='bio'>
            <p>{t(`${nameKey}-description`)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppThumbnail

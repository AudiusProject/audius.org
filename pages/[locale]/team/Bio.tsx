import React from 'react'

import { useTranslation } from 'next-i18next'

import IconLinkedIn from 'public/img/iconLinkedIn.svg'

type BioProps = {
  name?: string
  imageUrl: string
  linkedInUrl?: string
  disableModal?: boolean
}

const Bio = ({ name, imageUrl, linkedInUrl, disableModal }: BioProps) => {
  const nameKey = name?.replace(/ /g, '-').toLowerCase()
  const { t } = useTranslation('people')
  return (
    <div key={name}>
      <div className='person' data-modal={!disableModal && 'person-modal'}>
        <div className='headshot'>
          {linkedInUrl && (
            <a
              className='person-link'
              href={linkedInUrl}
              target='_blank'
              rel='noreferrer'
            >
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
          )}
          <img className='photo' src={imageUrl} alt={`Photo of ${name}`} />
        </div>
        <div className='description'>
          <h4 className='name'>{name}</h4>
          <h5 className='title'>{t(`${nameKey}-title`)}</h5>
          <div className='bio'>
            <p>{t(`${nameKey}-description`)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio

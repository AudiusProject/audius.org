import React from 'react'

import { useTranslation } from 'next-i18next'

import IconLinkedIn from 'public/img/iconLinkedIn.svg'

type BioProps = {
  name?: string
  imageUrl: string
  linkedInUrl?: string
  disableModal?: boolean
}

/**
 * Displays a teammate's bio.
 * 
 * Important to pass in both a linkedInUrl so that the modal
 * is able to reference their link.
 */
const Bio = ({
  name,
  imageUrl,
  linkedInUrl,
  disableModal,
}: BioProps) => {
  const nameKey = name?.replace(/ /g, '-').toLowerCase()
  const { t } = useTranslation('people')
  return (
    <div key={name}>
      <div
        className={`person ${disableModal ? 'nolink' : '' }`}
        data-modal={!disableModal ? 'person-modal' : undefined}
      >
        <div className='headshot'>
          {linkedInUrl && (
            <a
              style={{ display: 'none' }}
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
          <div className='description'>
            <h4 className='name'>{name}</h4>
            <h5 className='title'>{t(`${nameKey}-title`)}</h5>
              <div style={{ display: 'none' }} className='bio'>
                <p>{t(`${nameKey}-description`)}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio

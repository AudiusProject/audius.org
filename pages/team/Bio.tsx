import React from 'react'

import IconLinkedIn from 'public/img/iconLinkedIn.svg'

type BioProps = {
  name: string
  title: string
  description: string
  imageUrl: string
  linkedInUrl: string
}

const Bio = ({ name, title, description, imageUrl, linkedInUrl }: BioProps) => {
  return (
    <div key={name}>
      <div className='person' data-modal='person-modal'>
        <div className='headshot'>
          <a
            className='person-link'
            href={linkedInUrl}
            target='_blank'
            rel='noreferrer'
          >
            <IconLinkedIn />
            <span>LinkedIn</span>
          </a>
          <img className='photo' src={imageUrl} alt={`Photo of ${name}`} />
        </div>
        <div className='description'>
          <h4 className='name'>{name}</h4>
          <h5 className='title'>{title}</h5>
          <div className='bio'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio

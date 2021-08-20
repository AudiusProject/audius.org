import React from 'react'

import IconLink from 'public/img/iconLink.svg'

type AppThumbnailProps = {
  name: string
  shortDescription: string
  description: string
  image: string
  link: string
}

const AppThumbnail = ({
  name,
  shortDescription,
  description,
  image,
  link
}: AppThumbnailProps) => {
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
          <img
            className='photo'
            src={`/img/${image}`}
            alt={`Picture of ${name}`}
          />
        </div>
        <div className='description'>
          <h4 className='name'>{name}</h4>
          <h5 className='title'>{shortDescription}</h5>
          <div className='bio'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppThumbnail

import React from 'react'

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
            <svg
              className='linkedin'
              viewBox='0 0 30.3 27.8'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M.8 8.9h5.9v18.9h-5.9zM22.8 8.7c-3.4 0-5.5 1.8-5.9 3.1v-3h-6.6c.1 1.6 0 18.9 0 18.9h6.6v-10.1c0-.6 0-1.1.1-1.5.5-1.1 1.4-2.3 3.2-2.3 2.3 0 3.3 1.7 3.3 4.3v9.8h6.7v-10.6c.1-5.9-3.2-8.6-7.4-8.6zM3.6 0c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.4 3.6-3.3s-1.3-3.3-3.5-3.3z' />
            </svg>
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

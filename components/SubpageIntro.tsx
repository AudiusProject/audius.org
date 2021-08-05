import React, { ReactNode } from 'react'

type SubpageIntroProps = {
  title: string
  description?: ReactNode
}

const SubpageIntro = ({ title, description }: SubpageIntroProps) => {
  return (
    <section id='subpage-intro'>
      <div className='container'>
        <h1 className='page-header'>
          <span className='animation header-background'>
            <span className='sphere orange'></span>
            <span className='sphere orange-opaque'></span>
            <span className='sphere teal'></span>
            <span className='sphere purple-glow'></span>
          </span>
          <span className='header-cut-out'>{title}</span>
        </h1>
        {description && (
          <>
            <svg
              className='squiggle'
              aria-hidden='true'
              height='6.6'
              viewBox='0 0 46 6.6'
              width='46'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M46 6.6c-1.9 0-3.1-1.5-4.2-2.9s-2.1-2.7-3.8-2.7-2.7 1.3-3.8 2.7c-1.1 1.4-2.3 2.9-4.2 2.9-2.1 0-3.3-1.5-4.4-2.9-1-1.2-1.8-2.3-3.1-2.3s-2.4 1.1-3.5 2.3c-1.3 1.4-2.7 2.9-4.9 2.9s-3.6-1.1-4.9-2c-.9-.7-1.7-1.3-2.7-1.3-.7 0-1.2.2-1.8.4-1.1.4-2.3.9-4.7.9v-1c2.2 0 3.3-.4 4.3-.8.7-.3 1.3-.5 2.2-.5 1.3 0 2.3.7 3.3 1.5 1.1.9 2.3 1.8 4.2 1.8 1.8 0 2.9-1.3 4.2-2.6 1.2-1.3 2.4-2.6 4.2-2.6 1.8 0 2.9 1.3 3.9 2.7 1 1.3 2 2.5 3.6 2.5 1.4 0 2.4-1.2 3.4-2.5 1.2-1.5 2.5-3.1 4.7-3.1s3.5 1.6 4.6 3.1c1 1.3 2 2.5 3.4 2.5v1z' />
            </svg>
            <p>{description}</p>
          </>
        )}
      </div>
    </section>
  )
}

export default SubpageIntro

import React, { ReactNode } from 'react'

import IconSquiggle from 'public/img/iconSquiggle.svg'

type SubpageIntroProps = {
  title: string
  description?: ReactNode
  showDivider?: boolean
}

const SubpageIntro = ({
  title,
  description,
  showDivider
}: SubpageIntroProps) => {
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
        {showDivider || description ? <IconSquiggle /> : null}
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}

export default SubpageIntro

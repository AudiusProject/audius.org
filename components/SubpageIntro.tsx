import React from 'react'

type SubpageIntroProps = {
  title: string
}

const SubpageIntro = ({ title }: SubpageIntroProps) => {
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
      </div>
    </section>
  )
}

export default SubpageIntro

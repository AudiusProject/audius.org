import React from 'react'

import IconClose from 'public/img/iconClose.svg'
import IconLink from 'public/img/iconLink.svg'
import IconSquiggle from 'public/img/iconSquiggle.svg'

const Modal = () => {
  return (
    <div id='person-modal' className='modal' aria-hidden='true'>
      <div className='modal-container'>
        <div className='modal-frame'>
          <button className='close-modal'>
            <IconClose />
            <span>Close</span>
          </button>
          <div className='modal-content'>
            <div className='headshot'>
              <a className='person-link' href='' target='_blank' rel='noopener'>
                <IconLink />
              </a>
              <img className='photo' src='' alt='Photo' />
            </div>
            <div className='description'>
              <h4 className='name'></h4>
              <h5 className='title'></h5>
              <IconSquiggle />
              <div className='bio'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

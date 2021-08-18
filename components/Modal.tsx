import React from 'react'

import LinkIcon from 'public/img/iconLink.svg'
import SquiggleIcon from 'public/img/iconSquiggle.svg'

const Modal = () => {
  return (
    <div id='person-modal' className='modal' aria-hidden='true'>
      <div className='modal-container'>
        <div className='modal-frame'>
          <button className='close-modal'>
            <svg
              height='13.6'
              viewBox='0 0 13.6 13.6'
              width='13.6'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M13.6 2l-2-2-4.8 4.8-4.8-4.8-2 2 4.8 4.8-4.8 4.8 2 2 4.8-4.8 4.8 4.8 2-2-4.8-4.8z' />
            </svg>
            <span>Close</span>
          </button>
          <div className='modal-content'>
            <div className='headshot'>
              <a className='person-link' href='' target='_blank' rel='noopener'>
                <LinkIcon />
              </a>
              <img className='photo' src='' alt='Photo' />
            </div>
            <div className='description'>
              <h4 className='name'></h4>
              <h5 className='title'></h5>
              <SquiggleIcon />
              <div className='bio'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

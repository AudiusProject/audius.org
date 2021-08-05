import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <section id='newsletter'>
        <div className='container'>
          <div className='content'>
            <div className='header'>
              <h3>Empowering Artists Like Never Before</h3>
              <p>Get the latest news about Audius in your inbox.</p>
            </div>
            <form
              action='https://Audius.us18.list-manage.com/subscribe/post?u=f351897a27ff0a641b8acd9ab&amp;id=f064864764'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              className='validate'
              target='_blank'
              noValidate
            >
              <input
                type='email'
                value=''
                name='EMAIL'
                className='required email'
                id='mce-EMAIL'
                placeholder='Email'
              />
              <input
                type='submit'
                value='Submit'
                name='subscribe'
                id='mc-embedded-subscribe'
                className='standard-button purple'
              />
            </form>
          </div>
        </div>
        <span className='shapes' data-parallax='2' data-parallax-x='-50%'>
          <img src='/img/newsletter-shapes.png' alt='' data-rjs='2' />
        </span>
      </section>
    </div>
  )
}

export default Newsletter

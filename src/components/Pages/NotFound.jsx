import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='not-found'>
        <div className="wrap not-found__wrap">
            <div className="not-found__icon-holder has-cover" style={{backgroundImage: 'url(https://wojakparadise.net/wojak/10087/img)'}}>
                {/* <svg className='not-found__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM303.6 208c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm-128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg> */}
                {/* <img className='' src="https://pbs.twimg.com/media/FMMyj98XwAQ9yam.jpg" alt="" /> */}
            </div>
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__subtitle">Page Not Found</h2>
            <p className="not-found__text">The Page you are looking for doesn't exist or an other error occurred.</p>
            <Link className='not-found__link' to='/home'>Go Home!</Link>
        </div>
    </section>
  )
}

export default NotFound
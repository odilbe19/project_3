import React from 'react'
import FooterContainer from '../footer/footer_container'
import './open-movie-footer.css'

export default function OpenMovieFooterContainer() {
  return (
    <div className='open-movie-footer_container'>
       <div className="open-movie_footer_component">
       <FooterContainer/>
        <div className="open-movie-footer_container_bottom">
            <div className="open-movie-footer_container_bottom-left">
                <p>Privacy policy</p>
                <p>Term of service</p>
                <p>Language</p>
            </div>
            <p className='footer_date'>© 2023</p>
        </div>
       </div>
    </div>
  )
}

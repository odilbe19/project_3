import React from 'react'
import './movie-info_containers.css'

export default function MovieInfoContainers() {
  const iconPlay = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6 12C20.6 16.7496 16.7497 20.6 12 20.6C7.25038 20.6 3.40002 16.7496 3.40002 12C3.40002 7.25035 7.25038 3.39999 12 3.39999C16.7497 3.39999 20.6 7.25035 20.6 12ZM12.0204 7.76948C11.3453 7.31943 10.4773 7.27747 9.76194 7.66031C9.04659 8.04315 8.60002 8.78865 8.60002 9.6V14.4C8.60002 15.2113 9.04659 15.9568 9.76194 16.3397C10.4773 16.7225 11.3453 16.6806 12.0204 16.2305L15.6204 13.8305C16.2324 13.4225 16.6 12.7356 16.6 12C16.6 11.2644 16.2324 10.5775 15.6204 10.1695L12.0204 7.76948Z" fill="white" stroke="white" stroke-width="2"/>
</svg>

const iconWatch = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7519 9.16795L9.5547 7.03647C8.89015 6.59343 8 7.06982 8 7.86852V12.1315C8 12.9302 8.89015 13.4066 9.5547 12.9635L12.7519 10.8321C13.3457 10.4362 13.3457 9.56377 12.7519 9.16795Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const iconAdd = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  return (
    <div className='movie-info_containers'>
        <div className='movie-info_components'>
        <div className="movie-info_components_left">
           <div className="movie-info_components_left_desc">
           <div className="movie-info_components_left_seasion_info">
                <p>Season 3</p>
            </div>
            <div className="movie-info_components_left_desc_title">
                <h2>The Mandalorian</h2>
                <p className='movie-info_components_left_desc_title_time'>2h40m • 2022 • Fantasy • Actions</p>
                <p className='movie-info_components_left_desc_title_info'>The third season of the American television series The Mandalorian stars Pedro Pascal as the title character, a bounty hunter traveling to Mandalore to redeem his past transgressions with his adopted son Grogu and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.</p>
            </div>
           </div>

            <div className="movie-info_components_left_buttons">
                <div className="movie-info_components_left_buttons_button">
                    <span>{iconPlay}</span>
                    <p>Play Now</p>
                </div>
                <div className="movie-info_components_left_buttons_button">
                    <span>{iconWatch}</span>
                    <p>Watch Trailer</p>
                </div>
                <div className="movie-info_components_left_buttons_button">
                    <span>{iconAdd}</span>
                    <p>Add Watchlist</p>
                </div>
            </div>

        </div>
        <div className="movie-info_components_right">
            <div className="movie-info_components_right_carousel_dot"></div>
            <div className="movie-info_components_right_carousel_dot"></div>
            <div className="movie-info_components_right_carousel_dot"></div>
            <div className="movie-info_components_right_carousel_dot"></div>
            <div className="movie-info_components_right_carousel_dot"></div>
        </div>
    </div>
    </div>
  )
}

import React from 'react'
import './hero_component_left.css'

const iconPlay = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6 12C20.6 16.7496 16.7496 20.6 12 20.6C7.25035 20.6 3.39999 16.7496 3.39999 12C3.39999 7.25035 7.25035 3.39999 12 3.39999C16.7496 3.39999 20.6 7.25035 20.6 12ZM12.0203 7.76948C11.3453 7.31943 10.4773 7.27747 9.76191 7.66031C9.04656 8.04315 8.59999 8.78865 8.59999 9.6V14.4C8.59999 15.2113 9.04656 15.9568 9.76191 16.3397C10.4773 16.7225 11.3452 16.6806 12.0203 16.2305L15.6203 13.8305C16.2324 13.4225 16.6 12.7356 16.6 12C16.6 11.2644 16.2324 10.5775 15.6203 10.1695L12.0203 7.76948Z" fill="white" stroke="white" stroke-width="2"/>
</svg>

const iconSaved = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


export default function HeroComponentLeft() {
  return (
    <div className='hero_component_left'>
        <p className='hero_component_left_p'>Series</p>
       <div className='hero_component_left_desc'>
       <h1 className='hero_component_left_title'>The Last Of Us Season 1</h1>
        <p className='hero_component_left_date'>9 Episodes • 2022 • Fantasy • Actions</p>
       </div>
       <div className="hero_component_left_buttons">
            <a className='hero_component_left_buttons_1'>{iconPlay} <span>Continue Watching</span></a>
            <a className='hero_component_left_buttons_2'>{iconSaved} <span>Add Watchlist</span></a>
       </div>
    </div>
  )
}

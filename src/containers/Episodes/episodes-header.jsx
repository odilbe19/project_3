import React from 'react'
import './episodes-component.css'

const seassonIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 6L8.00004 10.6667L3.33337 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


export default function EpisodesHeader() {
  return (
    <div className='episodes-header'>
        <h4 className='episodes-header_title'>1-9 Episode</h4>
        <div className="episodes-header_btn">
            <span>Season 1</span>
            {seassonIcon}
        </div>
    </div>
  )
}

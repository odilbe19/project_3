import React from 'react'
import './your_watchlist_container.css'
import YourWatchlistComponent from './your_watchlist_component'
import YourLikesComponent from '../your_likes/your_likes_component'



export default function YourWatchlistContainer() {
  const title = "Your Watchlist"
  return (
    <div className='your_watchlist_container'>
        <YourWatchlistComponent title = {title} />
        <YourLikesComponent/>
    </div>
  )
}

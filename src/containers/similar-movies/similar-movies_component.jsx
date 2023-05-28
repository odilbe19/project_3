import React from 'react'
import YourWatchlistComponent from '../your_watchlist/your_watchlist_component'

export default function SimilarMoviesComponent() {
  return (
    <div className='similar-movies_component'>
        <h4 className='similar-movies_component_title'>Similar Movies for you</h4>
        <YourWatchlistComponent/>
    </div>
  )
}

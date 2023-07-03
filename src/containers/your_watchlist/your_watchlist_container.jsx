import React, { useEffect, useState } from 'react'
import './your_watchlist_container.css'
import YourWatchlistComponent from './your_watchlist_component'
import YourLikesComponent from '../your_likes/your_likes_component'
import Info_list from '../../repositories/MovieInformationReposetory'

export default function YourWatchlistContainer() {
  const [watchlist ,setWatchlist] = useState([])
  const [like , setLike] = useState([])
  const fetchWatchlist = async () =>{
    const watchlists = await Info_list.getWatchlistList()
    if(watchlists){
      setWatchlist(watchlists)
    }
  }
  const fetchLikes = async () =>{
    const likes = await Info_list.getLikesList()
    if(likes){
      setLike(likes)
    }
  }
  useEffect(() =>{
    fetchWatchlist()
    fetchLikes()
  } ,[])
  return (
    <div className='your_watchlist_container'>
      <h1 className="your_watchlist_component_title_h1_1">Your Watchlist</h1>
        <YourWatchlistComponent data = {watchlist} />
        <YourLikesComponent data = {like}/>
    </div>
  )
}

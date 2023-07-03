import React, { useEffect, useState } from 'react'
import SimilarMoviesComponent from './similar-movies_component'
import './similar.css'
import Info_list from '../../repositories/MovieInformationReposetory'


export default function SimilarMoviesContainer() {
  const [watchlist ,setWatchlist] = useState([])
  const fetchWatchlist = async () =>{
    const watchlists = await Info_list.getWatchlistList()
    if(watchlists){
      setWatchlist(watchlists)
    }
  }
  useEffect(() =>{
    fetchWatchlist()
  } ,[])
  return (
    <div className='similar-movies_container'>
        <SimilarMoviesComponent data = {watchlist}/>
    </div>
  )
}

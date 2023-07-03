import React, { useEffect, useState } from 'react'
import Info_list from '../../repositories/MovieInformationReposetory'
import Partners from './Partners.container'
import './Partners.container.css'
export default function MoviesContainer() {
  const [movies, setMovies] = useState([])
  const fetchMovies = async () => {
    const currentPartners =await Info_list.getPartnersList()
    if (currentPartners){
      setMovies(currentPartners)
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  return (
    <div>
      <Partners data={movies}/>
    </div>
  )
}

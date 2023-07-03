import React, { useEffect, useState } from 'react'
import PopularComponent from './popular_component'
import './popular_container.css'
import Info_list from '../../repositories/MovieInformationReposetory' 

export default function PopularContainer() {
  const [popular , setPopular] =useState([])
  const fetchPopular = async () => {
    const populars = await Info_list.getPopularList()
    if(populars){
      setPopular(populars)
    }
  }
  console.log(popular);
  useEffect(() =>{
    fetchPopular()
  } ,[])
    return (

    <div className='popular_container'>
        <PopularComponent data={popular}/>
    </div>
  )
}

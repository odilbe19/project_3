import React from 'react'
import './popular_component.css'
import PopularComponentsMovielist from './popular_components_movielist'

export default function PopularComponent({data}) {
  return (
    <div className='popular_component'>
                <h1 className='popular_component_h1'>Popular of the week</h1>
                <PopularComponentsMovielist data ={data}/>
    </div>
  )
}

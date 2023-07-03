import React, { useEffect, useState } from 'react'
import './explore_container.css'
import ExploreComponent from './explore_component'
import Info_list from '../../repositories/MovieInformationReposetory'
export default function ExploreContainer() {
  return (
    <div className='explore_container'>
      <ExploreComponent />
    </div>
  )
}

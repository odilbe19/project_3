import React, { useState } from 'react'
import MovieInformationComponent from './movie-information-component'
import './movie-container.css'

export default function MovieInformationContainer() {
  return (

    <div className='movie-information-container'>
        <MovieInformationComponent/>
    </div>
  )
}

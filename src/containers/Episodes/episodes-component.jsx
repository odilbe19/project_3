import React from 'react'
import EpisodesHeader from './episodes-header'
import EpisodesStreamlist from './episodes-streamlist'
import './episodes-component.css'

export default function EpisodesComponent() {
  return (
    <div className='episodes-component'>
        <EpisodesHeader/>
        <EpisodesStreamlist/>
    </div>
  )
}

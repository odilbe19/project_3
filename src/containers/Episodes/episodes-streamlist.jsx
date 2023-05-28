import React from 'react'
import EpisodesStreamlistItem from './streamlist-item/episodes-streamlist-item'
import './episodes-component.css'



export default function EpisodesStreamlist() {
  const name1 = "Chapter 1"
  const name2 = "Chapter 2"
  const name3 = "Chapter 3"
  const name4 = "Chapter 4"
  return (
    <div className='episodes-streamlist'>
     <div className="episodes-streamlist-item1">
        <EpisodesStreamlistItem name = {name1}/>
     </div>
     <div className="episodes-streamlist-item1">
        <EpisodesStreamlistItem name = {name2}/>
     </div>
     <div className="episodes-streamlist-item1">
        <EpisodesStreamlistItem name = {name3}/>
     </div>
     <div className="episodes-streamlist-item1">
        <EpisodesStreamlistItem name = {name4}/>
     </div>
    </div>
  )
}

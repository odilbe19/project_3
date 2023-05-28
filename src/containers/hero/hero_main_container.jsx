import React from 'react'
import HeroComponentLeft from './hero_component_left'
import './hero_main_container.css'
import HeroComponentRight from './hero_component_right'

export default function HeroMainContainer() {
  return (
    <div className='hero_main_container'>
        <HeroComponentLeft/>
        <HeroComponentRight/>
    </div>
  )
}

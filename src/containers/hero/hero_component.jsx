import React from 'react'
import './hero_component.css'
import HeaderNavbarContainer from '../header/header-navbar_container'
import HeroMainContainer from './hero_main_container'

export default function HeroComponent() {
  return (
    <div className='hero_component'>
    <div className="hero_component_navbar_container">
    <HeaderNavbarContainer/>
    </div>
     <HeroMainContainer/>
    </div>
  )
}

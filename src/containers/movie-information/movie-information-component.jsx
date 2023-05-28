import React from 'react'
import './movie-component.css'
import TopCastsCarousel from './movie-component-carousels/topCasts-carousel'
import movie_c_img1 from '../../assets/images/Bg.png'
import movie_c_img2 from '../../assets/images/Bg (1).png'
import movie_c_img3 from '../../assets/images/Bg (2).png'
import movie_c_img4 from '../../assets/images/Bg (4).png'
import movie_c_img5 from '../../assets/images/Bg (5).png'
import movie_c_img6 from '../../assets/images/Bg (6).png'
import movie_c_img7 from '../../assets/images/Bg (7).png'

export default function MovieInformationComponent() {
  const movie_c_fullName1 = 'Pedro Pascal'
  const movie_c_name1 = 'Joel Miller'
  const movie_c_fullName2 = 'Bella Ramsey'
  const movie_c_name2 = 'Ellie'
  const movie_c_fullName3 = 'Anna Torv'
  const movie_c_name3 = 'Tessa'
  const movie_c_fullName4 = 'Ashley Johnson'
  const movie_c_name4 = 'Ellie Mother'
  const movie_c_fullName5 = 'Nick Offerman'
  const movie_c_name5 = 'Bill'
  const movie_c_fullName6 = 'Nico Parker'
  const movie_c_name6 = 'Sarah Miller'
  const movie_c_fullName7 = 'Murray Bartlett'
  const movie_c_name7 = 'Frank'
  return (
    <div className='movie-information-component'>
        <div className='movie-component_stories'>
      <h4 className="movie-component_stories_title">Story Line</h4>
      <p className='movie-component_stories_description'>
      The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States.... <span>More</span>
      </p>
    </div>
    <div className='movie-component_topCats'>
      <h4 className='movie-component_topCats_title'>Top Cast</h4>
      <div className="movie-component_topCats_carousel">
        <TopCastsCarousel img = {movie_c_img1} fullName = {movie_c_fullName1} name = {movie_c_name1}/>
        <TopCastsCarousel img = {movie_c_img2} fullName = {movie_c_fullName2} name = {movie_c_name2}/>
        <TopCastsCarousel img = {movie_c_img3} fullName = {movie_c_fullName3} name = {movie_c_name3}/>
        <TopCastsCarousel img = {movie_c_img4} fullName = {movie_c_fullName4} name = {movie_c_name4}/>
        <TopCastsCarousel img = {movie_c_img5} fullName = {movie_c_fullName5} name = {movie_c_name5}/>
        <TopCastsCarousel img = {movie_c_img6} fullName = {movie_c_fullName6} name = {movie_c_name6}/>
        <TopCastsCarousel img = {movie_c_img7} fullName = {movie_c_fullName7} name = {movie_c_name7}/>
      </div>
    </div>
    </div>
  )
}

import React from 'react'
import HeroContainer from '../../containers/hero/hero_container'
import MovieInformationContainer from '../../containers/movie-information/movie-information-container'
import OptionsContainer from '../../containers/options/options_container'
import EpisodesContainer from '../../containers/Episodes/episodes-container'
import SimilarMoviesContainer from '../../containers/similar-movies/similar-movies_container'
import OpenMovieFooterContainer from '../../containers/open-movie-footer/open-movie-footer_container'

export default function OpenMovie() {
  return (
    <div className='open_movie'>
      <HeroContainer/>
      <MovieInformationContainer/>
      <OptionsContainer/>
      <EpisodesContainer/>
      <SimilarMoviesContainer/>
      <OpenMovieFooterContainer/>
    </div>
  )
}

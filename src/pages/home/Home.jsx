import React from 'react'
import HeaderContainers from '../../containers/header/header_containers'
import Partners from '../../containers/partners/Partners.container'
import ContinueWatchingContainer from '../../containers/continue_watching/continue-watching_container'
import PopularContainer from '../../containers/popular_of_the_week/popular_container'
import JustReliase from '../../containers/just_reliase/just_realise_component'
import YourWatchlistContainer from '../../containers/your_watchlist/your_watchlist_container'
import ExploreContainer from '../../containers/explore_by_the_genres/explore_container'
import FooterContainer from '../../containers/footer/footer_container'
import MoviesContainer from '../../containers/partners/Partners.conponent'
export default function Home() {
  return (
    <div>
      <HeaderContainers/>
      <MoviesContainer/>
      <ContinueWatchingContainer/>
      <PopularContainer/>
      <JustReliase/>
      <YourWatchlistContainer/>
      <ExploreContainer/>
      <FooterContainer/>
    </div>

  )
}

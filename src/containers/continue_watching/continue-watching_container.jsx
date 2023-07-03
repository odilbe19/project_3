import React ,{useState ,useEffect} from 'react'
import './continue-watching_containers.css'
import ContinueWatchingComponents from './continue-watching_components'
import Info_list from '../../repositories/MovieInformationReposetory'

export default function ContinueWatchingContainer() {
  const [Cont, setCont] = useState([])
  const fetchMovies = async () => {
    const currentPartners = await Info_list.getContinueList()
    if (currentPartners) {
      setCont(currentPartners)
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  return (
    <div className='continue-watching_container'>
        <ContinueWatchingComponents data={Cont}/>
    </div>
  )
}

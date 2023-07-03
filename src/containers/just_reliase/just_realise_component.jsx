import React, { useEffect, useState } from 'react'
import JustReliaseContainer from './just_reliase_container'
import Info_list from '../../repositories/MovieInformationReposetory'
export default function JustRealise() {
    const [just ,setJust] = useState([])
    const fetchJust = async () =>{
        const justs = await Info_list.getJustList()
        if(justs) {
            setJust(justs)
        }

    }
    useEffect(()=>{
        fetchJust()
    } ,[])
  return (
    <div>
        <JustReliaseContainer data={just}/>
    </div>
  )
}

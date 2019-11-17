import React, {Component} from 'react'
import NationalPark from './NationalPark'

import '../CSS/NationalParks.css'

function NationalParks (props) {
        
    const $nationalParks = props.nationalParks.map(nationalPark => {
        return <NationalPark 
        name={nationalPark.name}  
        city={nationalPark.city}  
        region={nationalPark.region}  
        country={nationalPark.country}  
        latitude={nationalPark.latitude}  
        longitude={nationalPark.longitude}  
        description={nationalPark.description}  
        size={nationalPark.size}  
        website={nationalPark.website}  
        image_url={nationalPark.image_url}  
        />
    })
    return (
        <ul className="nationalPark-cards">
        {$nationalParks}
        </ul>
    )
        
}

export default NationalParks
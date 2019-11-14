import React from 'react'
import City from './City'
import '../CSS/Cities.css'

function Cities(props){
    
    const $cities = props.cities.slice(0, 40).map(city => {
        return <City 
        key={city.id} 
        id={city.id} 
        cityName={city.city} 
        country={city.country} 
        region={city.region} 
        showCurrentCity={props.showCurrentCity} 
        />
    })

    return (
        

        <ul className='city-cards'>
            {$cities}
        </ul>
        
           

    )
    }

export default Cities
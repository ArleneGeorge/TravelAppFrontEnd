import React, {Component} from 'react'
import Restaurant from './Restaurant'

import '../CSS/Restaurants.css'

function Restaurants(props) {
    
    const $restaurant = props.restaurants.map(restaurant => {
        return <Restaurant 
        name={restaurant.name}  
        place_type={restaurant.place_type}  
        address={restaurant.address}  
        address2={restaurant.address2}  
        city={restaurant.city}  
        region={restaurant.region}  
        country={restaurant.country}  
        />
    })
    return (
        <ul className="restaurant-cards">
        {$restaurant}
        </ul>
    )
        
    
}

export default Restaurants
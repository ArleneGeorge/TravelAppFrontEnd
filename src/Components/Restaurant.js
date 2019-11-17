import React from 'react'
import '../CSS/Restaurant.css'

function Restaurant(props) {

    return(
        <li className='restaurant-card'>
            <h5> { props.name } </h5>
            <section className="address" >
            <p> {props.address} </p>
            <p> {props.city} , {props.region} </p>
            </section>
           
        </li>
    )

}

export default Restaurant
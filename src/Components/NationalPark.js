import React from 'react'
import '../CSS/NationalPark.css'

const NationalPark = props => {

   
    return(
        <li className='nationalPark-card'>
            <h5> { props.name } </h5>
            <p> {props.city} , {props.region} </p>
            <img src={props.image_url} className='img'/>
           
        </li>
    )
}

export default NationalPark
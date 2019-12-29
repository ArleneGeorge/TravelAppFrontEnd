import React from 'react'
import '../CSS/City.css'

const City = props => {

    return (
        <div>
            <div
                className="city-card"
                onClick={() => props.showCurrentCity(props)}
            >

                <h3>{props.cityName}</h3>
                <p>{props.region}</p>
                <p>{props.country}</p>
            </div>
        </div>
    )
}

export default City
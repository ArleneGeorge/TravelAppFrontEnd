import React from 'react'

function Restaurant(props) {

    return(
        <li>
            <h4> { props.name } </h4>
            <section className="address" >
            <p> {props.address} </p>
            <p> {props.city} , {props.region} </p>
            </section>
           
        </li>
    )

}

export default Restaurant
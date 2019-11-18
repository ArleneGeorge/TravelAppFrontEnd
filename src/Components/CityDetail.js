import React from 'react'

import '../CSS/CityDetail.css'

import Restaurants from './Restaurants'
import NationalParks from './NationalParks'


class CityDetail extends React.Component {

    state = {
        restaurants: [],
        isRestaurantsShowing: false,
        nationalParks: [],
        isNationalParksShowing: false,
    }

    toggleRestaurants = () => {
        this.setState({
          isRestaurantsShowing: !this.state.isRestaurantsShowing
        })
      }
    
      toggleNationalParks = () => {
        this.setState({
          isNationalParksShowing: !this.state.isNationalParksShowing
        })
      }

      getRestauratData= ()=> {
        fetch('https://travel-planner-app-api.herokuapp.com/restaurants')
        .then(response => response.json())
        .then(restaurants => this.setState({ restaurants }))
      }

      getNationalParksData= ()=> {
        fetch('https://travel-planner-app-api.herokuapp.com/national_parks')
        .then(response => response.json())
        .then(nationalParks => this.setState({ nationalParks }))
      }

      componentDidMount() {
        this.getRestauratData();
        this.getNationalParksData();
     }
    

     restaurantsFilteredByCity = () => this.state.restaurants
     .filter(restaurant => restaurant.city) 
     .filter(restaurant => {
     return(restaurant.city
             .toLowerCase()
             .includes(this.props.city.cityName.toLowerCase())
             )
     })
    
    nationalParksFilteredByCity = () => this.state.nationalParks
    
    .filter(nationalParks => nationalParks.city) 
    .filter(nationalParks => {
        return(nationalParks.city
            .toLowerCase()
            .includes(this.props.city.cityName.toLowerCase())
            )
    })
    

render() {
    return(
        
        

        <div className='CityDetail'>
            
            <header>
            <h1>{this.props.city.cityName}</h1>
            <h3>{this.props.city.region}</h3>
            <h3>{this.props.city.country}</h3>

            <section className='buttons'>
            
            
             {/* <input 
                 type='submit' 
                 value='Add To Favorites' 
                 onClick={() => this.props.showCurrentCity(this.props)}
           /> */}
            </section>
            <h3>What Do You Want To Do?</h3>
            <section className='filter-buttons'>
                
                <button 
                className='button'
                    onClick={this.toggleRestaurants}> 
                    Let's Eat and Drink!
                    </button>
                    <button 
                    className='button'
                     onClick={this.toggleNationalParks}> 
                     Let's Explore!
                     </button>
                     </section>
                    </header>
                    <input 
                className='button'
                id='back-button'
                type='submit' 
                value='Back To All Cities' 
                onClick={() => this.props.hideCurrentCity(this.props)}
            />

                    {
                        this.state.isRestaurantsShowing

                        ? <div> 
                        <Restaurants restaurants={this.restaurantsFilteredByCity()}/>
                        </div>
                        :null
                    }
                     

                    {
                        this.state.isNationalParksShowing

                        ? <div> 
                        <NationalParks nationalParks={this.nationalParksFilteredByCity()}/>
                        </div>
                        :null
                    }
            
            

            

            
            

        </div>
    )
}
}

export default CityDetail
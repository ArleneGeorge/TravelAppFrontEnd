import React from 'react'

import '../CSS/CityDetail.css'

import Restaurants from './Restaurants'


class CityDetail extends React.Component {

    state = {
        restaurants: [],
        isRestaurantsShowing: false,
    }

    toggleRestaurants = () => {
        this.setState({
          isRestaurantsShowing: !this.state.isRestaurantsShowing
        })
      }

    componentDidMount(){
        fetch('http://localhost:3000/restaurants')
      .then(response => response.json())
      .then(restaurants => this.setState({ restaurants }))
    }


    
    filteredByCity = () => this.state.restaurants
    .filter(restaurant => restaurant.city) 
    .filter(restaurant => {
        return(restaurant.city
            .toLowerCase()
            .includes(this.props.city.cityName.toLowerCase())
            )
    })
    

render() {
    console.log('city detail', this.props);
    return(
        
        

        <div className='CityDetail'>
            
            
            <h3>{this.props.city.cityName}</h3>
            <p>{this.props.city.region}</p>
            <p>{this.props.city.country}</p>
            <section className='buttons'>
            <input 
                type='submit' 
                value='Show All Cities' 
                onClick={() => this.props.hideCurrentCity(this.props)}
            />
            
            <input 
                type='submit' 
                value='Add To Favorites' 
                onClick={() => this.props.showCurrentCity(this.props)}
            />
            </section>

            <section className='filter-buttons'>
                <h1>What Do You Want To Do?</h1>
                <button 
                    onClick={this.toggleRestaurants}> 
                    Let's Eat and Drink!
                    </button>
                    

                    {
                        this.state.isRestaurantsShowing

                        ? <div> 
                        <Restaurants restaurants={this.filteredByCity()}/>
                        </div>
                        :null
                    }
            </section>

            

            
            

        </div>
    )
}
}

export default CityDetail
import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import Cities from './Components/Cities'
import CityForm from './Components/CityForm'
import CityDetail from './Components/CityDetail'
import FilterBox from './Components/FilterBox'


import './App.css';



class Home extends Component {
  state = {
    cities: [],
    isAddNewCityShowing: false,
    newCity: [],
    currentCity: null,
    searchTerm: "",
    restaurants: [],
    
  }

  // http://localhost:3000/locations

  componentDidMount(){
    fetch('https://travel-planner-app-api.herokuapp.com/locations')
      .then(response => response.json())
      .then(cities => this.setState({ cities }))
  }
  
  toggleAddNewCity = () => {
    this.setState({
      isAddNewCityShowing: !this.state.isAddNewCityShowing
    })
  }

  

  showCurrentCity = aCity => {
    this.setState({
      currentCity: aCity
    })
    
  }
  hideCurrentCity = () => {
    this.setState({
      currentCity: null
    })
  }

  

  filteredCities = () => this.state.cities
  
  .filter(city => city.country && city.region && city.city)
  .filter(city => {
    return (city.country 
    .toLowerCase()
    .includes(this.state.searchTerm.toLowerCase())
    ) || (city.region 
      .toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
      ) || (city.city
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
      )
  })

  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

 

  render () {
  return (
    
    <div className="App">
                  
     
      {

        this.state.currentCity
        
        ? <CityDetail city={this.state.currentCity} hideCurrentCity={this.hideCurrentCity} />

        : <div>
        
        
          
          
            <section className='searching'>
          <h4 >Where Would You like To Explore</h4> 
          <FilterBox 
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          />
          </section>
          <Cities cities={this.filteredCities()} showCurrentCity={this.showCurrentCity} />
          <button 
          className='add-new-button'
          onClick={this.toggleAddNewCity}> 
          Add New City 
          </button>

            {
            this.state.isAddNewCityShowing
            ?<CityForm />

            :null
            }

      
      </div>
      }

        
     
    </div>
  );

  }
}

export default Home;

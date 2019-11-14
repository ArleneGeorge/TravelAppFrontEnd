import React, {Component} from 'react';

import Cities from './Components/Cities'
import CityForm from './Components/CityForm'
import CityDetail from './Components/CityDetail'
import FilterBox from './Components/FilterBox'

import './App.css';



class App extends Component {
  state = {
    cities: [],
    isAddNewCityShowing: false,
    newCity: [],
    currentCity: null,
    searchTerm: "",
    restaurants: [],
  }

  componentDidMount(){
    fetch('http://localhost:3000/locations')
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
        
        
          <button 
          onClick={this.toggleAddNewCity}> 
          Add New City 
          </button>
          {
              this.state.isAddNewCityShowing
              ?<CityForm />

              :null
            }
          
          <FilterBox 
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          />
          <Cities cities={this.filteredCities()} showCurrentCity={this.showCurrentCity} />


    

      
        
      
      </div>
      }

        
     
    </div>
  );

  }
}

export default App;

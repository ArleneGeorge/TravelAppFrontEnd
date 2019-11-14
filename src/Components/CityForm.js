import React, {Component} from 'react'

class CityForm extends Component{
    state = {
        name: "",
        country: "",
    }


    handleChange = event => {
        const { name, value } = event.target

        this.setState({[name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {city, country, region} = this.state
        const newCity = {city, country, region}
        fetch('http://localhost:3000/locations',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCity)

    })
    this.setState({
        newCity: {
            city: "city",
            region: "state/province",
            country: 'country'
        }
    })
    }

    render() {
        const {city, country, region} = this.state
        return(
            <section className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name='city'
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={this.handleChange}
                    />

                    <input 
                    name='region'
                    type='text'
                    placeholder='State/Province'
                    value={region}
                    onChange={this.handleChange}
                    />

                    <input 
                    name='country'
                    type='text'
                    placeholder='Country'
                    value={country}
                    onChange={this.handleChange}
                    />
                    
                    

                    <input 
                    type='submit' 
                    value='Submit City' 
                    />
                </form>
            </section>
        )
    }

}

export default CityForm
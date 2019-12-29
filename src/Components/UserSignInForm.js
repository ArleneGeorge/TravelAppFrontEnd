import React, {Component} from 'react'

import '../CSS/UserSignInForm.css'

class UserSignInForm extends Component{
    state = {
        name: "", 
    }


    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {username, password} = this.state
        const signedInUser = {username, password }

        fetch(`https://travel-planner-app-api.herokuapp.com/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signedInUser)

    }).then(response => response.json())
        .then(response => {
    })


    this.setState({
        signedInUser: {
            username: 'username',
            password: 'password'
        }
    })
    }

    render() {
        const {username, password} = this.state
        return(
            <section className='user-sign-in-form'>

                <h1> Sign In </h1>
                <form className='form' onSubmit={this.handleSubmit}>

                    <input 
                    className='input'
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={username }
                    onChange={this.handleChange}
                    />

                    <input 
                    className='input'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={this.handleChange}
                    />
                    
                    

                    <input 
                    className='button'
                    type='submit' 
                    value='Sign In!' 
                    />

                    
                </form>
            </section>
        )
    }

}

export default UserSignInForm

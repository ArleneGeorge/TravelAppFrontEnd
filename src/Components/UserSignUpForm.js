import React, {Component} from 'react'
import '../CSS/UserSignUpForm.css'

class UserSignUpForm extends Component{
    state = {
        name: "",
    }


    handleChange = event => {
        const { name, value } = event.target

        this.setState({[name]: value })
    }

    handleSubmit = (event) => {

        const {first_name, last_name, email, username, password} = this.state
        const newUser = {first_name, last_name, email, username, password }
        fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)

    })


    this.setState({
        newUser: {
            first_name: "first_name",
            last_name: "last_name",
            email: "email",
            username: 'username',
            password: "password"
        }
    })
    }

    render() {
        const {first_name, last_name, email, username, password} = this.state
        return(
            <section className='user-sign-up-form'>

                <h1> Sign Up </h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input 
                    className='input'
                    name='first_name'
                    type='text'
                    placeholder='First Name'
                    value={first_name}
                    onChange={this.handleChange}
                    />

                    <input 
                    className='input'
                    name='last_name'
                    type='text'
                    placeholder='Last Name'
                    value={last_name}
                    onChange={this.handleChange}
                    />

                    <input 
                    className='input'
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={this.handleChange}
                    />

                    <input 
                    className='input'
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email }
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
                    value='Sign Up!' 
                    />

                    
                </form>
            </section>
        )
    }

}

export default UserSignUpForm
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './Home'



import UserSignUpForm from './Components/UserSignUpForm'
import UserSignInForm from './Components/UserSignInForm'


export default class App extends Component {

  state = {
    toHome: false,
    currentUser: null,
    isSignUpShowing: false,
  }
      toggleNewUserShowing = () => {
        this.setState({
          isSignUpShowing: !this.state.isSignUpShowing
        })
      }
 


  render () {
    

    return (
      <div>
         

          {
              this.state.isSignUpShowing
              ?<UserSignUpForm />

              :<div><UserSignInForm />
              <div className='new-user-button'>
                <button 
                    id='new-user-button'
                    className='button'
                    onClick={this.toggleNewUserShowing}
                    type='submit' >Create New User
                    
                    </button>
                    </div>
                    </div>
            
          }

          <Home />
                      

  

          </div>
    )
  }
}
          

  

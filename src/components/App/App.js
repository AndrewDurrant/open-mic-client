import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// components
import Nav from '../Nav/Nav'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import UserHomePage from '../../routes/UserHomePage/UserHomePage'
import UploadVideoPage from '../../routes/UploadVideoPage/UploadVideoPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  render() {
    return (
      <div className='App'>
          <header className='App_header'>
            <Nav />
          </header>
          <main className='App_main'>
            <Switch>
              {this.state.hasError && <p className='red'>There was an error! Nobody Panic!</p>}
              <Route
                exact
                path={'/'}
                component={LandingPage}
              />
              <Route
                path={'/login'}
                component={LoginPage}
              />
              <Route
                path={'/register'}
                component={RegistrationPage}
              />
              <Route
                path={'/user-home'}
                component={UserHomePage}
              />
              <Route
                path={'/upload-video'}
                component={UploadVideoPage}
              />
              <Route
                component={NotFoundPage}
              />
            </Switch>
          </main>
      </div>
    )
  }
}



export default App;

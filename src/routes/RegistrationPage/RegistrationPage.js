import React, { Component } from 'react'
import './RegistrationPage.css';

// components
import { Section } from '../../components/Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  state = { 
    registered: false,
  }

  handleRegistrationSuccess = () => {
    this.setState({ registered: true })
    setTimeout(this.handleRedirect, 5000);
  }
  
  handleRedirect = () => {
    const { history } = this.props
    history.push('/login');
  }

  displaySuccessRegistration = () => {
    return (
      <h2>Registration Successful!</h2>
    )
  }
  

  render() {
    return (
      <Section className='RegistrationPage'>
        {this.state.registered ? 
          this.displaySuccessRegistration() :
          <h2>Register</h2>
        }
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
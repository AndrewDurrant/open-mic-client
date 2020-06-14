import React, { Component } from 'react'
import OpenMicApiService from '../../services/openmic-api-service'
import './RegistrationForm.css';

import { Button, Input, Required } from '../Utils/Utils'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleToLowerCase = ev => {
    // prevents capital letters from  being used for username
    ev.target.value = ev.target.value.toLowerCase();
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password, email } = ev.target

    this.setState({ error: null })
    OpenMicApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value,
      email: email.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        email.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name' />
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'
            onChange={this.handleToLowerCase} />
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password' />
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__email'>
            Email
          </label>
          <Input
            name='email'
            type='email'
            required
            id='RegistrationForm__email' />
        </div>
        <Button type='submit' className='submit_btn'>
          Register
        </Button>
      </form>
    )
  }
}
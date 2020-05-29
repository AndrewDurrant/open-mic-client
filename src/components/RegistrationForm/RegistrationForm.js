import React, { Component } from 'react'
import './RegistrationForm.css';

import { Button, Input, Required } from '../Utils/Utils'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password, email } = ev.target

    full_name.value = ''
    user_name.value = ''
    password.value = ''
    email.value = ''
    this.props.onRegistrationSuccess()
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
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='RegistrationForm__email'>
            Email
          </label>
          <Input
            name='email'
            type='email'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <Button type='submit' className='submit_btn'>
          Register
        </Button>
      </form>
    )
  }
}
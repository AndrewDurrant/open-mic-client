import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import './LoginForm.css';
// import AuthApiService from '../../services/AuthApiService'
import TokenService from '../../services/token-services';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }


  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='form_input'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit' className='submit_btn'>
          Login
        </Button>
      </form>
    )
  }
}
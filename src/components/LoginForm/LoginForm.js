import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import './LoginForm.css';
import TokenService from '../../services/token-services';
import VideoListContext from '../../contexts/VideoListContext';

export default class LoginForm extends Component {
  static contextType = VideoListContext;
  
  state = { error: null }

  handleToLowerCase = ev => {
    // prevents capital letters from  being used for username
    ev.target.value = ev.target.value.toLowerCase();
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    // store created token in localStorage
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )
    // clear inputs and reroute user
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
            id='LoginForm__user_name'
            onChange={this.handleToLowerCase}>
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
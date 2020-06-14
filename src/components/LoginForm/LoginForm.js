import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import './LoginForm.css';
import TokenService from '../../services/token-services';
import VideoListContext from '../../contexts/VideoListContext';
import OpenMicApiService from '../../services/openmic-api-service';

export default class LoginForm extends Component {
  static contextType = VideoListContext;

  state = { error: null }

  handleToLowerCase = ev => {
    // prevents capital letters from  being used for username
    ev.target.value = ev.target.value.toLowerCase();
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    OpenMicApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
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
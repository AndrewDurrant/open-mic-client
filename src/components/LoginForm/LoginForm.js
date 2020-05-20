import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
// import AuthApiService from '../../services/AuthApiService'
// import TokenService from '../../services/token-service'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }
  //**** CODE FOR AUTHENTICATION ****/
  
  // handleSubmitJwtAuth = ev => {
  //   ev.preventDefault();
  //   this.setState({ error: null })
  //   const { user_name, password } = ev.target

  //   AuthApiService.postLogin({
  //     user_name: user_name.value,
  //     password: password.value
  //   })
  //     .then(res => {
  //       user_name.value = ''
  //       password.value = ''
  //       TokenService.saveAuthToken(res.authToken)
  //       this.props.onLoginSuccess()
  //     })
  //     .catch(res => {
  //       this.setState({ error: res.error })
  //     })
  // }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    console.log('login form submitted')
    console.log({ user_name, password })

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
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
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
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
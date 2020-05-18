import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import TokenService from '../../services/token-service'// not built out yet
import './Nav.css'

export class Nav extends Component {
  handleLogoutClick = () => {
  }

  renderLogoutLink() {
    return (
      <div className='Nav__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Nav__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return (
      <>
        <nav className='main_nav'>
          <h1>
            <Link to='/'>
              OPEN-MIC
            </Link>
          </h1>
          <span>Hop up on stage and express yourself.</span>
          <ul className='nav_links'>
            <li>
              <Link to='/'>
                Log in
              </Link>
            </li>
            <li>
              <Link to='/'>
                Log out
              </Link>
            </li>
            <li>
              <Link to='/'>
                Create account
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav

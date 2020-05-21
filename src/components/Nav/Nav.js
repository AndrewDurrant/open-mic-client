import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import TokenService from '../../services/token-service'// not built out yet
import './Nav.css'

export class Nav extends Component {
  state = {
    menuOpen: false
  }

  handleMenuOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleLogoutClick = () => {
    console.log('logging out now!')
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
          <h1 className='app_logo'>
            <Link to='/'>
              OPEN-MIC
            </Link>
          </h1>
          <span>Hop up on stage and express yourself.</span>
          <i className={`main_nav_menu fas ${this.state.menuOpen ? 'fa-times' : 'fa-bars'}`} onClick={this.handleMenuOpen}></i>
          <ul className={this.state.menuOpen ? 'nav_links nav_links_open' : 'nav_links'}>
            <li>
              <Link to='/' onClick={this.handleMenuOpen}>
                Upload video
              </Link>
            </li>
            <li>
              <Link to='/login' onClick={this.handleMenuOpen}>
                Log in
              </Link>
            </li>
            <li>
              <Link to='/logout' onClick={this.handleMenuOpen}>
                Log out
              </Link>
            </li>
            <li>
              <Link to='/register' onClick={this.handleMenuOpen}>
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

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import TokenService from '../../services/token-services'
import VideoListContext from '../../contexts/VideoListContext'

export class Nav extends Component {
  static contextType = VideoListContext;

  state = {
    menuOpen: false
  }

  handleMenuOpen = () => {
    // toggles hamburger menu
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleLogoutClick = () => {
    // clear auth user data and close menu
    this.setState({ menuOpen: !this.state.menuOpen })
    TokenService.clearAuthToken();
    this.context.clearUser()
  }

  renderAuthLinks() {
    return (
      <ul className={this.state.menuOpen ? 'nav_links nav_links_open' : 'nav_links'}>
        <li>
          <Link to='/upload-video' onClick={this.handleMenuOpen}>
            Upload video
          </Link>
        </li>
        <li>
          <Link to='/' onClick={this.handleLogoutClick}>
            Log out
          </Link>
        </li>
      </ul>
    )
  }

  renderUnauthLinks() {
    return (
      <ul className={this.state.menuOpen ? 'nav_links nav_links_open' : 'nav_links'}>
        <li>
          <Link to='/login' onClick={this.handleMenuOpen}>
            Log in
          </Link>
        </li>
        <li>
          <Link to='/register' onClick={this.handleMenuOpen}>
            Create account
          </Link>
        </li>
      </ul>
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
          {TokenService.hasAuthToken()
          ? this.renderAuthLinks()
          : this.renderUnauthLinks()}
        </nav>
      </>
    )
  }
}

export default Nav

import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
export class LandingPage extends Component {

  render() {
    return (
      <main>
        <section className="user-options">
          <span className="sign-in">
            <Link
              to='/login'>
              Log In
            </Link>
          </span>
          <span className="create-user">
            <Link
              to='/register'>
              Create Account
            </Link>
          </span>
        </section>
        <section className="icon-container">
          <i className="microphone fas fa-microphone-alt icon-4x"></i>
        </section>
        <span className="create-user">
            <Link
              to='/user-home'>
              Watch Performances
            </Link>
          </span>
        <section className="app-desc">
          <p>
            Open-Mic is a digital stage to post your audio musical performances and listen to the sounds of your fellow musicians. Hop up on stage and share or kick back with your favorite beverage and listen to the latest songs from your favorite performers.
          </p>
        </section>
      </main>
    )
  }
}

export default LandingPage

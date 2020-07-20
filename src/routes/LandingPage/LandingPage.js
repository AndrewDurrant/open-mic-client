import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";
import TokenService from '../../services/token-services';

export class LandingPage extends Component {

  render() {
    return (
      <>
      {TokenService.hasAuthToken()
        ? <Redirect to={'/user-home'} />
        : <main className='landing-page'>
            <section className="user-options">
              <span className="main-btn">
                <Link
                  to='/login'>
                  Log In
                </Link>
              </span>
              <span className="main-btn">
                <Link
                  to='/register'>
                  Create Account
                </Link>
              </span>
            </section>
            <section className="icon-container">
              <i className="microphone fas fa-microphone-alt icon-4x"></i>
            </section>
            <span className="main-btn">
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
        }
        </>
    )
  }
}

export default LandingPage
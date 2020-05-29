import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UserHomePage.css'
import VideoListContext from '../../contexts/VideoListContext'
import OpenMicApiService from '../../services/openmic-api-service'
import TokenService from '../../services/token-services'
import { Section } from '../../components/Utils/Utils'

// components
import VideoCard from '../../components/VideoCard/VideoCard'
import UserVideoCard from '../../components/UserVideoCard/UserVideoCard'


export class UserHomePage extends Component {
  static contextType = VideoListContext
  
  state = {
    currentSectionIndex: 0,
    sections: [
      {
        title: 'Most Recent',
        content: this.context.showMostRecent
      },
      {
        title: 'Best Rated',
        content: this.context.showBestRated
      },
      {
        title: 'My Videos',
        content: this.context.showMyVideos
      }
    ]
  }

  componentDidMount() {
    this.context.clearError()
    // retrieve videos from db
    OpenMicApiService.getVideos()
      .then(res => this.context.setVideoList(res))
      .then(() => {
        if (TokenService.hasAuthToken()) {
          // retrieve auth user info from db
          OpenMicApiService.getUser()
            .then(data => {
              this.context.setUser(...data)
            })
            .catch(err => {
              // clear token if it's not valid
              TokenService.clearAuthToken()
              this.context.setUser(null)
            })
        }
        
      })
      .catch(err => this.context.setError(err))
  }
  

  handleChangeSection = (i) => {
    this.setState({ currentSectionIndex: i });
  };

  renderSectionTitle = () => {
    // create sub-nav buttons
    const sections = this.state.sections.map((section, i) => (
      <li key={i}>
        <button
          className={this.state.currentSectionIndex === i ? 'user_links_active' : ''}
          onClick={() => this.handleChangeSection(i)}
        >
          {section.title}
        </button>
      </li>
    ));

    return sections;
  }

  renderSectionContent = () => {
    const { sections, currentSectionIndex } = this.state;
    // get content to display
    const currentSection = sections[currentSectionIndex].content();
    if (currentSectionIndex !== 2 && currentSection.length < 1) {
      // if no content, display empty paragraph
      return <p></p>
    } else if (currentSectionIndex === 2 && this.context.authUser) {
      // if my videos and auth user, create editable cards
      return currentSection.map(video => {
        return <UserVideoCard key={video.id} video={video} onSuccess={this.handleSuccess} />
      })
    } else if (currentSectionIndex === 2) {
      // if my videos and unauth user, create link to register
      return <Link to='/register' className='text-btn'>sign up to share a video</Link>
    }
    return currentSection.map(video => {
      // default to create cards
      return <VideoCard key={video.id} video={video} />
    })
  };

  handleSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    
    return history.push(destination)
  }

  render() {
    const { error } = this.context

    return (
      <>
        <nav className='user_nav'>
          <ul className='user_links'>
            {this.state.sections ? this.renderSectionTitle() : <li></li>}
          </ul>
        </nav>
        <Section grid className='UserHomePage'>
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderSectionContent()}
        </Section>
      </>
    )
  }
}

export default UserHomePage
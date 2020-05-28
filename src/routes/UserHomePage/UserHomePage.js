import React, { Component } from 'react'
import VideoListContext from '../../contexts/VideoListContext'
import OpenMicApiService from '../../services/openmic-api-service'
import { Section } from '../../components/Utils/Utils'
import VideoCard from '../../components/VideoCard/VideoCard'
import UserVideoCard from '../../components/UserVideoCard/UserVideoCard'
import TokenService from '../../services/token-services'

import './UserHomePage.css'

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
    OpenMicApiService.getVideos()
      .then(res => this.context.setVideoList(res))
      .then(() => {
        if (TokenService.hasAuthToken()) {
          OpenMicApiService.getUser()
            .then(data => {
            this.context.setUser(...data)
            })
            .catch(err => console.log('ERRORING', err))
        }
        
      })
      .catch(err => this.context.setError(err))
  }
  

  handleChangeSection = (i) => {
    this.setState({ currentSectionIndex: i });
  };

  renderSectionTitle = () => {
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
    const currentSection = sections[currentSectionIndex].content() || '';
    if (currentSection.length < 1) {
      return <p></p>
    } else if (currentSectionIndex === 2) {
      return currentSection.map(video => {
        return <UserVideoCard key={video.id} video={video} onSuccess={this.handleSuccess} />
      })
    }
    return currentSection.map(video => {
      return <VideoCard key={video.id} video={video} />
    })
  };

  handleSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    console.log('WE made it here!');
    
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
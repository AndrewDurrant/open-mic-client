import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VideoListContext from '../../contexts/VideoListContext'
import OpenMicApiService from '../../services/openmic-api-service'
import { Section, Button } from '../../components/Utils/Utils'
import Video from '../../components/Video/Video'
import VideoCard from '../../components/VideoCard/VideoCard'

import './UserHomePage.css'

export class UserHomePage extends Component {
  static contextType = VideoListContext

  componentDidMount() {
    this.context.clearError()
    OpenMicApiService.getVideos()
      .then(this.context.setVideoList)
      .catch(this.context.setError)
  }
  
  renderVideoCardList() {
    const { videoList = [] } = this.context
    
    return videoList.map(video => {
      return <VideoCard key={video.id} video={video} />
    }
    )
  }

  render() {
    const { error } = this.context

    return (
      <>
        <nav className='user_nav'>
          <ul className='user_links'>
            <li>
              <Link to='/' className='user_links_active'>
                Most Recent
              </Link>
            </li>
            <li>
              <Link to='/'>
                Favorites
              </Link>
            </li>
            <li>
              <Link to='/'>
                My Videos
              </Link>
            </li>
          </ul>
        </nav>
        <Section grid className='UserHomePage'>
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderVideoCardList()}
        </Section>
      </>
    )
  }
}

export default UserHomePage

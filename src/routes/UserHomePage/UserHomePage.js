import React, { Component } from 'react'
import VideoListContext from '../../contexts/VideoListContext'
import OpenMicApiService from '../../services/openmic-api-service'
import { Section } from '../../components/Utils/Utils'
import Video from '../../components/Video/Video'
import './UserHomePage.css'
// import STORE from '../../STORE'

export class UserHomePage extends Component {
  static contextType = VideoListContext

  componentDidMount() {
    this.context.clearError()
    OpenMicApiService.getVideos()
      .then(this.context.setVideoList)
      .catch(this.context.setError)
  }
  
  renderVideos() {
    const { videoList = [] } = this.context
    
    return videoList.map(video => {
      const regex = /(watch\?v=)/gi;
      const embedLink = video.link.replace(regex, 'embed/')
      return <Video 
        key={video.id}
        video={video}
        videoLink={embedLink}
      />
    }
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='UserHomePage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderVideos()}
      </Section>
    )
  }
}

export default UserHomePage

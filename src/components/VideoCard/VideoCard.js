import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import OpenMicApiService from '../../services/openmic-api-service'
import { Section } from '../../components/Utils/Utils'
import Video from '../../components/Video/Video'
import VideoContext from '../../contexts/VideoContext'
import CommentForm from '../CommentForm/CommentForm'

import './VideoCard.css'


export class VideoCard extends Component {
  // The constructor is here to make the star rating work. Refactor to use context when you can.
  constructor() {
    super();
    this.state = {
      rating: 1
    }
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = VideoContext

  // componentDidMount() {
  //   const {videoId} = this.props.match.params
  //   this.context.clearError()
  //   OpenMicApiService.getVideoComments(videoId)
  //     .then(this.context.setComments)
  //     .catch(this.context.setError)
  //   OpenMicApiService.getVideoRatings(videoId)
  //     .then(this.context.setRatings)
  //     .catch(this.context.setError)
  // }

  renderVideo() {
    return <Video 
        key={this.props.video.id}
        video={this.props.video}
      />
  }
  //Refactor this method to do a POST to the API
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue})
  }

  render() {
    const { error } = this.context
    const { rating } = this.state
    return (
      <main className='VideoCard'>
        <div className='video_rating'>
          <i className="fas fa-microphone-alt icon-4x"></i>
          <i className="fas fa-microphone-alt icon-4x"></i>
          <i className="fas fa-microphone-alt icon-4x"></i>
          <i className="fas fa-microphone-alt icon-4x"></i>
        </div>
        <h2 className='video_title'>
          {this.props.video.title}
        </h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderVideo()}
        <div className='video_description'>
          <p>{this.props.video.description}</p>
          <h4>@{this.props.video.user.user_name}</h4>          
        </div>
        <CommentForm />
        <StarRatingComponent 
          name="rate1" 
          renderStarIcon={() => <span><i className="fas fa-microphone-alt icon-4x"></i></span>}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </main>
    )
  }
}

export default VideoCard

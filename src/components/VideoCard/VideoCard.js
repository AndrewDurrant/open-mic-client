import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { AverageRating } from '../../components/Utils/Utils'
import Video from '../../components/Video/Video'
import VideoContext from '../../contexts/VideoContext'
import CommentForm from '../CommentForm/CommentForm'
import TokenService from '../../services/token-services';

import './VideoCard.css'


export class VideoCard extends Component {
  state = {
    userRating: 1
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = VideoContext;

  componentDidMount() {
    this.context.clearError()
    this.context.setVideo(this.props.video)
  }

  //Refactor this method to do a POST to the API and also PATCH with updated rating
  onStarClick(nextValue, prevValue, name) {
    this.setState({userRating: nextValue})
  }

  renderComments = (videoComments) => {
    return videoComments.sort((a, b) => Date.parse(b.date_created) - Date.parse(a.date_created)).slice(0, 2).map((comment, i) => <p key={i}>{videoComments[i].comment}</p>)
  }

  renderVideo() {
    return <Video 
        key={this.props.video.id}
        video={this.props.video}
      />
  }
  
  renderAuthContent = (id, comments, userRating) => {
    return (
      <>
        <CommentForm videoId={id} />
        <div className="video_comments">
          {this.renderComments(comments)}
        </div>
        <StarRatingComponent 
          name="rate1" 
          renderStarIcon={() => <span><i className="fas fa-microphone-alt icon-4x"></i></span>}
          starCount={4}
          value={userRating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </>
    )
  }

  render() {
    const { error } = this.context;
    const { userRating } = this.state;
    const { comments, rating, title, description, id } = this.props.video;

    return (
      <main className='VideoCard'>
        <div className='video_rating'>
          {AverageRating(Math.round(rating))}
        </div>
        <h2 className='video_title'>
          {title}
        </h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderVideo()}
        <div className='video_description'>
          <p>{description}</p>
        </div>

        {TokenService.hasAuthToken()
          ? this.renderAuthContent(id, comments, userRating)
          : null}
      </main>
    )
  }
}

export default VideoCard

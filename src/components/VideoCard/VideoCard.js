import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { AverageRating, Section } from '../../components/Utils/Utils'
import Video from '../../components/Video/Video'
import VideoContext from '../../contexts/VideoContext'
import CommentForm from '../CommentForm/CommentForm'

import './VideoCard.css'


export class VideoCard extends Component {
  state = {
    rating: 1
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = VideoContext

  renderComments = () => {
    let comments = [];
    for (let i = 0; i < 2; i++) {      
      if (this.props.video.comments[i]) {
      comments.push(<p key={i}>{this.props.video.comments[i].comment}</p>)
      }
    }
    return comments;
  }

  renderVideo() {
    return <Video 
        key={this.props.video.id}
        video={this.props.video}
      />
  }
  //Refactor this method to do a POST to the API and also PATCH with updated rating
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue})
  }

  render() {
    const { error } = this.context;
    const { rating } = this.state;

    return (
      <main className='VideoCard'>
        <div className='video_rating'>
          {AverageRating(Math.round(this.props.video.rating))}
        </div>
        <h2 className='video_title'>
          {this.props.video.title}
        </h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderVideo()}
        <div className='video_description'>
          <p>{this.props.video.description}</p>
          {/* <h4>@{this.props.video.user.user_name}</h4> */}
        </div>
        <CommentForm />
        <div className="video_comments">
          {this.renderComments()}
        </div>
        <StarRatingComponent 
          name="rate1" 
          renderStarIcon={() => <span><i className="fas fa-microphone-alt icon-4x"></i></span>}
          starCount={4}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </main>
    )
  }
}

export default VideoCard

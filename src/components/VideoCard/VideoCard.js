import React, { Component } from 'react'
import './VideoCard.css'
import StarRatingComponent from 'react-star-rating-component'
import { AverageRating } from '../../components/Utils/Utils'
import TokenService from '../../services/token-services'
import VideoListContext from '../../contexts/VideoListContext'
import OpenMicApiService from '../../services/openmic-api-service'


// components
import Video from '../../components/Video/Video'
import CommentForm from '../CommentForm/CommentForm'

export class VideoCard extends Component {
  state = {
    userRating: 0,
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = VideoListContext;

  //Refactor this method to do a POST to the API and also PATCH with updated rating
  onStarClick(nextValue, prevValue, name) { 
    this.setState({userRating: nextValue})
    OpenMicApiService.postRating(this.props.video.id, nextValue)
      .then(rating => {
        console.log('it was a successful rating')
        // once rating is posted to db, add to context
        // this.context.addRating(rating);
      })
      .catch(this.context.setError)
  }

  renderComments = (videoComments) => {
    return videoComments.sort((a, b) => Date.parse(b.date_created) - Date.parse(a.date_created)).slice(0, 2).map((comment, i) => {
      console.log(comment)
      if (videoComments[i].comment !== null) {
        return <p key={i}>{videoComments[i].comment}</p>
      }
    })
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

import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { AverageRating } from '../../components/Utils/Utils'
import Video from '../../components/Video/Video'
import VideoListContext from '../../contexts/VideoListContext'
import CommentForm from '../CommentForm/CommentForm'
import TokenService from '../../services/token-services';
import OpenMicApiService from '../../services/openmic-api-service'
import { Button, Textarea } from '../Utils/Utils'

import './UserVideoCard.css'


export class UserVideoCard extends Component {
  state = {
    userRating: 1
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = VideoListContext;

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

  handleSubmit = ev => {
    ev.preventDefault()
    const { title, description } = ev.target;

    OpenMicApiService.updateVideo(this.props.videoId, title.value, description.value)
      .then(data => {
        console.log(data)
      })
      .catch(this.context.setError)
  }

  render() {
    const { error } = this.context;
    const { userRating } = this.state;
    const { comments, rating, title, description, id } = this.props.video;

    return (
      <main className='UserVideoCard'>
        <div className='video_rating'>
          {AverageRating(Math.round(rating))}
        </div>
        <form>
          <div className='video_title'>
            <Textarea
              required
              className='text_form'
              aria-label='{title}'
              name='title'
              value={title}
              cols='30'
              rows='3'
              placeholder='{title}'>
            </Textarea>
          </div>
          {error
            ? <p className='red'>There was an error, try again</p>
            : this.renderVideo()}
          <div className='video_description'>
            <p>
              <Textarea
                required
                className='text_form'
                aria-label='{description}'
                name='description'
                value={description}
                cols='30'
                rows='3'
                placeholder='{description}'>
              </Textarea>
            </p>
            {/* <h4>@{this.props.video.user.user_name}</h4> */}
          </div>
          {TokenService.hasAuthToken()
          ? this.renderAuthContent(id, comments, userRating)
          : null}
          <Button type='submit' className='basic_btn'>
            Update
          </Button>
          <Button>
            Delete
          </Button>
        </form>
      </main>
    )
  }
}

export default UserVideoCard
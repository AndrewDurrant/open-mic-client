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
  static contextType = VideoListContext;

  state = {
    userRating: 1,
    title: this.props.video.title,
    description: this.props.video.description
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
      .then(() => {
        this.props.onSuccess();
      })
      .catch(this.context.setError)
  }

  handleDelete = () => {
    OpenMicApiService.deleteVideo(this.props.video.id)
      .then(() => {
        this.props.onSuccess();
      })
      .catch(err => this.context.setError(err));
  }

  handleUpdateVideo = () => {
    const vid = { 
      title: this.state.title,
      description: this.state.description,
      id: this.props.video.id
    }
    OpenMicApiService.updateVideo(vid)
      .then(res => {
        this.props.onSuccess();
      })
      .catch(err => this.context.setError(err));
  }

  render() {
    const { error } = this.context;
    const { userRating, title, description } = this.state;
    const { comments, rating, id } = this.props.video;

    return (
      <main className='VideoCard'>
        <div className='video_rating'>
          {AverageRating(Math.round(rating))}
        </div>
        <div>
          <div className='video_title'>
            <Textarea
              required
              className='text_form'
              aria-label='{title}'
              name='title'
              value={title}
              cols='30'
              rows='3'
              onChange={this.handleChange}>
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
                onChange={this.handleChange}>
              </Textarea>
            </p>
          </div>
          {TokenService.hasAuthToken()
          ? this.renderAuthContent(id, comments, userRating)
          : null}
          <div className='btn_container'>
            <Button type='submit' className='basic_btn' onClick={this.handleUpdateVideo}>
              Update
            </Button>
            <Button onClick={this.handleDelete} className='basic_btn'>
              Delete
            </Button>
          </div>
        </div>
      </main>
    )
  }
}

export default UserVideoCard
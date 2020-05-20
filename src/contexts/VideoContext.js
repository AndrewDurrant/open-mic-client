import React, { Component } from 'react'

export const nullVideo = {
  author: {},
  tags: [],
}

const VideoContext = React.createContext({
  video: nullVideo,
  comments: [],
  ratings: [],
  users: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setVideo: () => {},
  clearVideo: () => {},
  setInteractions: () => {},
  addInteraction: () => {},
})

export default VideoContext

export class VideoProvider extends Component {
  state = {
    video: nullVideo,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setVideo = video => {
    this.setState({ video })
  }

  setComment = comment => {
    this.setState({ comment })
  }

  setRating = rating => {
    this.setState({ rating })
  }

  clearVideo = () => {
    this.setVideo(nullVideo)
    this.setInteractions([])
  }

  addComment = comment => {
    this.setComment([
      ...this.state.comments,
      comment
    ])
  }

  addRating = rating => {
    this.setRating([
      ...this.state.ratings,
      rating
    ])
  }

  render() {
    const value = {
      video: this.state.video,
      comments: this.state.comments,
      ratings: this.state.ratings,
      users: this.state.users,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVideo: this.setVideo,
      setComment: this.setComment,
      setRating: this.setRating,
      clearVideo: this.clearVideo,
      addComment: this.addComment,
      addRating: this.addRating,
    }
    return (
      <VideoContext.Provider value={value}>
        {this.props.children}
      </VideoContext.Provider>
    )
  }
}

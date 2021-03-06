import React, { Component } from 'react'

const VideoListContext = React.createContext({
  authUser: null,
  videoList: [],
  error: null,
  setUser: () => {},
  clearUser: () => {},
  setError: () => {},
  clearError: () => {},
  setVideoList: () => {},
})
export default VideoListContext

export class VideoListProvider extends Component {
  state = {
    authUser: null,
    videoList: [],
    error: null,
  };

  setUser = (authUser) => {
    this.setState({ authUser })
  }
  
  clearUser = (authUser) => {
    this.setState({ authUser: null })
  }

  setVideoList = videoList => {
    this.setState({ videoList })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  showMostRecent = () => {
    // sort videos by date created, return sorted list
    const mostRecent = this.state.videoList.sort((a, b) => Date.parse(b.date_created) - Date.parse(a.date_created))
    return mostRecent;
  }

  showBestRated = () => {
    // sort videos by highest rating, return sorted list
    const bestRated = this.state.videoList.sort((a, b) => b.rating - a.rating)
    return bestRated;
    
  }

  showMyVideos = () => {
    // check if there is an auth user
    if (!this.state.authUser) return [];
    // filter videos for video user === auth user, return filtered list
    const userVideos = this.state.videoList.filter(video => video.user_id === this.state.authUser.id);
    return userVideos;
  }

  addComment = (data) => {

    const { comment, date_created, user } = data
    let updatedComment = {
      comment: comment,
      date_created: date_created,
      user_id: user.user_id
    };
    let updatedVideoList = this.state.videoList.map(video => {
      if (video.id === data.media_id) {
        return {...video, comments: [...video.comments, updatedComment]} 
      }
      return video
    })
    this.setState({
      videoList: updatedVideoList
    })
  }

  addRating = (data) => {

    const { rating, date_created, user } = data
    let newRating = {
      rating: rating,
      date_created: date_created,
      user_id: user.id
    };
    let updatedVideoList = this.state.videoList.map(video => {
      if (video.id === data.media_id) {
        return {...video, ratings: [...video.ratings, newRating]} 
      }
      return video
    })
    this.setState({
      videoList: updatedVideoList
    })
  }

  render() {
    const value = {
      authUser: this.state.authUser,
      videoList: this.state.videoList,
      error: this.state.error,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setError: this.setError,
      clearError: this.clearError,
      setVideoList: this.setVideoList,
      showMostRecent: this.showMostRecent,
      showBestRated: this.showBestRated,
      showMyVideos: this.showMyVideos,
      addComment: this.addComment,
      addRating: this.addRating,
      addVideo: this.addVideo
    }
    return (
      <VideoListContext.Provider value={value}>
        {this.props.children}
      </VideoListContext.Provider>
    )
  }
}

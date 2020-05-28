import React, { Component } from 'react'

const VideoListContext = React.createContext({
  videoList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setVideoList: () => {},
})
export default VideoListContext

export class VideoListProvider extends Component {
  state = {
    videoList: [],
    error: null,
  };

  setVideoList = videoList => {
    this.setState({ videoList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  showMostRecent = () => {
    const mostRecent = this.state.videoList.sort((a, b) => Date.parse(b.date_created) - Date.parse(a.date_created))
    return mostRecent;
  }

  showBestRated = () => {
    const bestRated = this.state.videoList.sort((a, b) => b.rating - a.rating)
    return bestRated;
    
  }


  // need jwt to use the filter **
  showMyVideos = () => {
    // fetch instead of filter!!
    // const userVideos = this.state.videoList.filter(video => video.user_id === )
    // // filter where author === authUser
    // console.log('show my videos')
    // return userVideos
  }

  addVideo = (data) => {
    console.log('CONTEXT', data);
    
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

  render() {
    const value = {
      videoList: this.state.videoList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVideoList: this.setVideoList,
      showMostRecent: this.showMostRecent,
      showBestRated: this.showBestRated,
      showMyVideos: this.showMyVideos,
      addComment: this.addComment,
      addVideo: this.addVideo
    }
    return (
      <VideoListContext.Provider value={value}>
        {this.props.children}
      </VideoListContext.Provider>
    )
  }
}

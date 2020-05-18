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

  render() {
    const value = {
      videoList: this.state.videoList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVideoList: this.setVideoList,
    }
    return (
      <VideoListContext.Provider value={value}>
        {this.props.children}
      </VideoListContext.Provider>
    )
  }
}

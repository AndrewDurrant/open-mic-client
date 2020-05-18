import React, { Component } from 'react'

export const nullVideo = {
  author: {},
  tags: [],
}

const VideoContext = React.createContext({
  thing: nullVideo,
  interactions: [],
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
    thing: nullVideo,
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

  setInteractions = interactions => {
    this.setState({ interactions })
  }

  clearThing = () => {
    this.setVideo(nullVideo)
    this.setInteractions([])
  }

  addInteraction = interaction => {
    this.setInteractions([
      ...this.state.interactions,
      interaction
    ])
  }

  render() {
    const value = {
      video: this.state.video,
      interactions: this.state.interactions,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setVideo: this.setVideo,
      setInteractions: this.setInteractions,
      clearVideo: this.clearVideo,
      addInteraction: this.addInteraction,
    }
    return (
      <VideoContext.Provider value={value}>
        {this.props.children}
      </VideoContext.Provider>
    )
  }
}

import React, { Component } from 'react'

const OpenMicContext = React.createContext({
  videos: [],
  interactions: [],
  users: [],
  error: null,
  setVideos: () => {},
  addVideo: () => {},
  addFavorite: () => {},
})
export default OpenMicContext


export class OpenMicProvider extends Component {
  state = {
    videos: [],
    interactions: [],
    users: [],
    error: null,
  }

  setVideos = videos => {
    this.setState({ videos });
  }

  addVideo = video => {
    this.setVideos({
      ...this.state.videos,
      video
    })
  }

  render() {
    const value = {
      
    }
  }
}
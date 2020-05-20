import React, { Component } from 'react'

export class VideoCard extends Component {



  render() {
    const { video }
    return (
      <main>
        <header>
          <h2>
            {video.title}
          </h2>
          
        </header>
      </main>
    )
  }
}

export default VideoCard

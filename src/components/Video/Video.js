import React, { Component } from 'react'
import './Video.css'

export default class Video extends Component {
  render() {
    const { video } = this.props
    let embedLink;
    if (video.link.includes('watch')) {
      // regex for youtube
      const regex = /(watch\?v=)/gi;
      embedLink = video.link.replace(regex, 'embed/')
    } else if (video.link.includes('vimeo')) {
      // regex for vimeo
      const regex = /(vimeo.com)/gi;
      embedLink = video.link.replace(regex, 'player.vimeo.com/video')
    } else if (video.link.includes('youtu.be')) {
      const regex = /(youtu.be)/gi;
      embedLink = video.link.replace(regex, 'www.youtube.com/embed')
    }
    
    return (
      <div className="video">
        <iframe src={embedLink}
          allow='autoplay; encrypted-media'
          frameBorder='0'
          allowFullScreen
          title={video.title}
          className='video_frame'
          loading='lazy'
        />
      </div>
    )
  }
}

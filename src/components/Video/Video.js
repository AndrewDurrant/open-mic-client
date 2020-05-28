import React, { Component } from 'react'
// import { Hyph, NiceDate } from '../../components/Utils/Utils'
import './Video.css'


export default class Video extends Component {
  render() {
    const { video } = this.props
    const regex = /(watch\?v=)/gi;
    const embedLink = video.link.replace(regex, 'embed/')
    
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



// renderVideo() {
//   const { video } = this.context
  
//   return <>
//       <div>
//       <Section id="video">
//         <h2>{ video.title }</h2>
//         {/* <VideoRatings ratings={ ratings } />
//         <VideoContent video={ video } />
//         <VideoComments comments={ comments } /> */}
//         <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
//           frameBorder='0'
//           allow='autoplay; encrypted-media'
//           allowFullScreen
//           title='video'
//         />
//       </Section>
//       </div>
//     </>
// }
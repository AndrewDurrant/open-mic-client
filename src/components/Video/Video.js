import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import { Link } from 'react-router-dom' // This could be used for comments maybe? They use it in blogful for a link to the article. I do not want a link that just goes to this video. I don't think...
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
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          className='video_frame'
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
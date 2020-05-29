import React from 'react'
import ReactDOM from 'react-dom'
import VideoCard from './VideoCard'

const video = {
    id: 1,
    title: "Frozen Margarita",
    link: "https://www.youtube.com/watch?v=-0JDlAn2Y5Y",
    description: "I wrote this while drinking warm sake.",
    date_created: "2020-05-19T20:27:31.882Z",
    user: {
        id: 1,
        full_name: "Digital Dave",
        user_name: "David Maui",
        date_created: "2020-05-19T20:27:31.882Z"
    },
    number_of_interactions: 0,
    average_comment_rating: 0
}

describe('VideoCard component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<VideoCard video={video} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

import React from 'react'
import ReactDOM from 'react-dom'
import CommentForm from './CommentForm'

describe('CommentForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CommentForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
    
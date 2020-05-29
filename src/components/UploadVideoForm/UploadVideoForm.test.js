import React from 'react'
import ReactDOM from 'react-dom'
import UploadVideoForm from './UploadVideoForm'

describe('UploadVideoForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<UploadVideoForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

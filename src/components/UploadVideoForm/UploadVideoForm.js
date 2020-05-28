import React, { Component } from 'react'
import './UploadVideoForm.css';
import OpenMicApiService from '../../services/openmic-api-service'
import VideoListContext from '../../contexts/VideoListContext'
import { Button, Input } from '../Utils/Utils'


export default class UploadVideoForm extends Component {
  static contextType = VideoListContext

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { title, link, description } = ev.target
    const newVideo = { 
      title: title.value, 
      link: link.value, 
      description: description.value
    }    
    OpenMicApiService.postVideo(newVideo)
      .then(data => {
        console.log('UPLOAD TRACK', data);
        this.context.addVideo(data);
      })
      .then(() => {
        title.value = ''
        link.value = ''
        description.value = ''
        this.props.onUploadSuccess()
      })
      .catch(this.context.setError)

  }

  render() {
    const { error } = this.state
    return (
      <form
        className='UploadForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='form_input'>
          <label htmlFor='UploadForm__title'>
            Title 
          </label>
          <Input
            required
            name='title'
            type='text'
            id='UploadForm__title'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='UploadForm__link'>
            Link 
          </label>
          <Input
            required
            name='link'
            type='url'
            id='UploadForm__link'>
          </Input>
        </div>
        <div className='form_input'>
          <label htmlFor='UploadForm__description'>
            Description 
          </label>
          <textarea
            required
            name='description'
            type='text'
            id='UploadForm__description'>
          </textarea>
        </div>
        <Button type='submit' className='submit_btn'>
          Upload
        </Button>
      </form>
    )
  }
}
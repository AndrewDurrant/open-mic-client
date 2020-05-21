import React, { Component } from 'react'
import VideoContext from '../../contexts/VideoContext'
import OpenMicApiService from '../../services/openmic-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css';

export class CommentForm extends Component {
  static contextType = VideoContext
  
  handleSubmit = ev => {
    ev.preventDefault()
    const { video } = this.context
    const { text } = ev.target
    OpenMicApiService.postComment(video.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <Textarea
          required
          className='text_form'
          aria-label='Type a comment...'
          name='text'
          id='text'
          cols='30'
          rows='3'
          placeholder='Type a comment..'>
        </Textarea>
        <Button type='submit' className='basic_btn'>
          Post
        </Button>
      </form>
    )
  }
}

export default CommentForm

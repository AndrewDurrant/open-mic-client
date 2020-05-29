import React, { Component } from 'react'
import './CommentForm.css';
import VideoListContext from '../../contexts/VideoListContext'
import OpenMicApiService from '../../services/openmic-api-service'
import { Button, Textarea } from '../Utils/Utils'

export class CommentForm extends Component {
  static contextType = VideoListContext
  
  handleSubmit = ev => {
    ev.preventDefault()
    const { text } = ev.target;

    OpenMicApiService.postComment(this.props.videoId, text.value)
      .then(data => {
        // once comment is posted to db, add to context
        this.context.addComment(data);
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

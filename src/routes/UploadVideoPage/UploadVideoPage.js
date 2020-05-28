import React, { Component } from 'react'
import './UploadVideoPage.css'
import UploadVideoForm from '../../components/UploadVideoForm/UploadVideoForm';
import { Section } from '../../components/Utils/Utils';


export class UploadVideoPage extends Component {

  handleUploadSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className='UploadVideoPage'>
        <h2>Share your Video</h2>
        <p className='heading-blurb'>submit your embeddable link to show the community what you can do</p>
        <UploadVideoForm onUploadSuccess={this.handleUploadSuccess}  />
      </Section>
    )
  }
}

export default UploadVideoPage

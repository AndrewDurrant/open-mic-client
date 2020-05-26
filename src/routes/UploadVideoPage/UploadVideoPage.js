import React, { Component } from 'react'
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
      <Section className='RegistrationPage'>
        <h2>Upload Video Link</h2>
        <UploadVideoForm onUploadSuccess={this.handleUploadSuccess}  />
      </Section>
    )
  }
}

export default UploadVideoPage

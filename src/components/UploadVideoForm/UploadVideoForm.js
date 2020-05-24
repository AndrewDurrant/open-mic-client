import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OpenMicApiService from '../../services/openmic-api-service'
import VideoContext from '../../contexts/VideoContext'
import { Button, Textarea } from '../Utils/Utils'


class UploadVideoForm extends Component {
  render() {
    return (
      <main>
        <section class="form-container">
          <p>UPLOAD TRACK FORM: </p>
          <form action="">
            <div class="input-group">
              <label for="title">Title</label>
              <br />
              <input type="text" name="username" id="username" required />
            </div>
            <div class="input-group">
              <label for="description">Description</label>
              <br />
              <input type="text" name="description" id="description" />
            </div>
            <div class="input-group">
              <label for="song">Select song:</label>
              <input type="file" id="song" name="song" accept="audio/*" />
            </div>
            <button class="song-submit" type="submit">Save</button>
          </form>
        </section>
      </main>
    )
  }
}

export default UploadVideoForm

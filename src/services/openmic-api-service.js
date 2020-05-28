import config from '../config'
import TokenService from '../services/token-services'

const OpenMicApiService = {
  getUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getVideos() {
    return fetch(`${config.API_ENDPOINT}/videos`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteVideo(videoId) {
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
  },

  updateVideo(video) {
    const { title, description, id } = video;
    return fetch(`${config.API_ENDPOINT}/videos/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        id,
        description
      }),
    })
  },

  postVideo(video) {
    const { title, link, description } = video;

    return fetch(`${config.API_ENDPOINT}/videos`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        link,
        description
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  postComment(videoId, text) {
    return fetch(`${config.API_ENDPOINT}/interactions/comment`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        video_id: videoId,
        rating: null,
        comment: text,
      }),
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // need to find out what data type the rating is for this method?
  postRating(videoId, notSureWhatGoesHere) {
    return fetch(`${config.API_ENDPOINT}/interactions/${videoId}/rating`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        video_id: videoId,
        notSureWhatGoesHere,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => {
            Promise.reject(e)
          })
          : res.json()
      )
  },
}

export default OpenMicApiService
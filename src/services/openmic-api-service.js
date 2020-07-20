import config from '../config'
import TokenService from '../services/token-services'

const OpenMicApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
  },

  updateVideo(video) {
    const { title, description, id } = video;
    return fetch(`${config.API_ENDPOINT}/videos/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
  postRating(videoId, rating) {
    console.log(videoId)
    return fetch(`${config.API_ENDPOINT}/interactions/rating`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        video_id: videoId,
        rating: rating,
        comment: null,
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
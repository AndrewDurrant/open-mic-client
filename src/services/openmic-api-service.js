import config from '../config'

const OpenMicApiService = {
  getVideos() {
    return fetch(`${config.API_ENDPOINT}/video`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getVideo(videoId) {
    return fetch(`${config.API_ENDPOINT}/video/${videoId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getVideoRatings(videoId) {
    return fetch(`${config.API_ENDPOINT}/video/${videoId}/ratings`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getVideoComments(videoId) {
    return fetch(`${config.API_ENDPOINT}/video/${videoId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(videoId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        video_id: videoId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default OpenMicApiService
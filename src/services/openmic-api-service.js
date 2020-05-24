import config from '../config'

const OpenMicApiService = {
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
  getVideo(videoId) {
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}`, {
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
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}/ratings`, {
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
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getVideoInteractionsById(videoId) {
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}/interactions`, {
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
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}comments`, {
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
  },
  // need to find out what data type the rating is for this method?
  postRating(videoId, notSureWhatGoesHere) {
    return fetch(`${config.API_ENDPOINT}/videos/${videoId}/ratings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        video_id: videoId,
        notSureWhatGoesHere,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default OpenMicApiService
import axios from 'axios'

export const axiosGet = (url, params={}) => (
  axios.get(`${process.env.REACT_APP_API_ENDPOINT}${url}`, {
    params,
  })
)

export const axiosPost = (url, params={}) => (
  axios.post(`${process.env.REACT_APP_API_ENDPOINT}${url}`, params)
)

export const callGet = (url, token, params = {}) => (
  axios.get(`${process.env.REACT_APP_API_ENDPOINT}${url}`, {
    headers: {
      'x-access-token': token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    params,
  })
)

export const callPost = (url, payload, token) => (
  axios.post(`${process.env.REACT_APP_API_ENDPOINT}${url}`, payload, {
    headers: {
      'x-access-token': token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
)
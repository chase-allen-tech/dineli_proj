import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actionTypes/auth'

import {
  axiosGet,
  axiosPost,
} from '../../services/axios'
import { Notification } from 'element-react'

export const actionAuthLogin = (userData) => (dispatch) => {
  axiosPost('/api/auth/signin', userData)
    .then(function (response) {
      Notification.success({
        title: 'Success',
        message: 'login success!',
        type: 'success'
      })
      // saving localstorage data with user data
      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({
        type: LOGIN_SUCCESS, payload: response.data
      })
    })
    .catch((error) => {
      if (error.response.status === 404) {
        Notification.error({
          title: 'Failed',
          message: 'User not found!',
          type: 'Warning',
        })
      } else if (error.response.status === 401) {
        Notification.error({
          title: 'Failed',
          message: 'Invalid password!',
          type: 'Warning',
        })
      } else if (error.response.status === 402) {
        Notification.error({
          title: 'Failed',
          message: 'Not activated yet!',
          type: 'Warning',
        })
      } else {
        Notification.error({
          title: 'Failed',
          message: 'Try again!',
          type: 'Warning',
        })
      }
      dispatch({
        type: LOGIN_FAIL,
      })
    }
  )
}
export const actionAuthRegister = (userData) => (dispatch) => {
  axiosPost('/api/auth/signup', userData)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'Register success. Verification Email is just sent. Please check your email!',
        type: 'success'
      })
      dispatch({
        type: LOGOUT,
      })

    })
    .catch((error) => {
      if (error.response.status === 400) {
        Notification.error({
          title: 'Failed',
          message: 'User name or Email is already in use.',
          type: 'Warning'
        });
      } else if (error.response.status === 500) {
        Notification.error({
          title: 'Failed',
          message: 'Please try again.',
          type: 'Warning'
        })
      }
      dispatch({
        type: LOGOUT,
      })
    })
}
export const actionAuthActivate = (verificationString) => (dispatch) => {
  const url = `/api/auth/verify/${verificationString}`
  axiosGet(url)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: response.data.message,
        type: 'success',
      })
    })
    .catch((error) => {
      if (error.response.status === 404) {
        Notification.error({
          title: 'Failed',
          message: 'User not found!',
          type: 'Warning',
        })
      } else {
        Notification.error({
          title: 'Failed',
          message: error.response.data.message,
          type: 'Warning',
        })
      }
    })
}
export const actionAuthResetPassword = (userData) => (dispatch) => {
  axiosPost('/api/auth/resetPassword', userData)
    .then((response) => {
      console.log(response)
      Notification.success({
        title: 'Success',
        message: 'Your password has been changed. Please check your email!',
        type: 'success',
      })
    })
    .catch((error) => {
      console.log(error)
      Notification.error({
        title: 'Failed',
        message: 'Failed to reset password!',
        type: 'warning',
      })
    })
}

export const actionAuthResetNewPassword = (userData) => (dispatch) => {
  axiosPost('/api/auth/resetNewPassword', userData)
    .then((response) => {
      console.log(response)
      Notification.success({
        title: 'Success',
        message: 'Your password has been changed. Please check your email!',
        type: 'success',
      })
    })
    .catch((error) => {
      console.log(error)
      Notification.error({
        title: 'Failed',
        message: 'Failed to reset password!',
        type: 'warning',
      })
    })
}

export const actionAuthLogout = () => (dispatch) => {
  localStorage.removeItem('user')
  dispatch({
    type: LOGOUT,
  })
}
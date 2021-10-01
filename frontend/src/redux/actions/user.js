import {
  ACTION_USER_ADD,
  ACTION_USER_LIST,
  ACTION_USER_LIST_FAIL,
  ACTION_USER_SET_CURRENT,
  ACTION_USER_UPDATE
} from '../actionTypes/user'
import { actionAuthUpdateCard } from './auth'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionUserCreate = (tokenData) => (dispatch) => {
  callPost('/api/admin/user', tokenData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_USER_ADD,
        payload: tokenData,
      })
    }).catch(err => {
      console.log(err);
      Notification.error({
        title: 'Failed',
        message: 'Please try again.',
        type: 'Warning',
      })
    }
  )
}

export const actionUserList = (count) => (dispatch) => {
  return callGet(`/api/user?count=${count}`)
    .then(function (response) {
      let result = response.data
      dispatch({
        type: ACTION_USER_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_USER_LIST_FAIL,
      })
    }
  )
}

export const actionUserUpdate = (userData) => dispatch => {
  callPost('/api/admin/user/update', userData, token)
    .then((response) => {
      console.log('[res]', response);
      Notification.success({
        title: 'Success',
        message: response.data.message,
        type: 'success',
      })
      dispatch({
        type: ACTION_USER_UPDATE,
        payload: userData,
      })
    }).catch(err => {
      console.log(err);
      Notification.error({
        title: 'Failed',
        message: 'Transaction update failed. Please try again.',
        type: 'Warning',
      })
    }
  )
}

export const actionUserUpdateCard = (cardData) => dispatch => {
  callPost('/api/admin/user/update/card', cardData, token)
    .then((response) => {
      console.log('[res]', response);
      Notification.success({
        title: 'Success',
        message: response.data.message,
        type: 'success',
      })
      dispatch(actionAuthUpdateCard(cardData.card));
    }).catch(err => {
      console.log(err);
      Notification.error({
        title: 'Failed',
        message: 'Transaction update failed. Please try again.',
        type: 'Warning',
      })
    }
  )
} 

export const actionUserSetCurrent = (user) => dispatch => {
  dispatch({
    type:ACTION_USER_SET_CURRENT,
    payload: user
  })
}
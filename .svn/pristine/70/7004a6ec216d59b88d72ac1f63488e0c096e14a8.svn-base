import {
  ACTION_FAQ_ADD,
  ACTION_FAQ_LIST,
  ACTION_FAQ_LIST_FAIL,
  ACTION_FAQ_GET,
  ACTION_FAQ_GET_FAIL,
} from '../actionTypes/faq'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionFaqCreate = (faqData) => (dispatch) => {
  callPost('/api/admin/faq', faqData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_FAQ_ADD,
        payload: faqData,
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

export const actionFaqList = (count) => (dispatch) => {
  return callGet(`/api/faq?count=${count}`)
    .then(function (response) {
      let result = response.data
      dispatch({
        type: ACTION_FAQ_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_FAQ_LIST_FAIL,
      })
    }
  )
}

export const actionFaqGet = (ID) => (dispatch) => {
  return callGet(`/api/faq/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      return dispatch({
        type: ACTION_FAQ_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_FAQ_GET_FAIL,
      })
    }
  )
}
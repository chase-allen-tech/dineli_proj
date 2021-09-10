import {
  ACTION_BLOG_ADD,
  ACTION_BLOG_LIST,
  ACTION_BLOG_LIST_FAIL,
  ACTION_BLOG_GET,
  ACTION_BLOG_GET_FAIL,
} from '../actionTypes/blog'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionBlogCreate = (blogData) => (dispatch) => {
  callPost('/api/admin/blog', blogData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_BLOG_ADD,
        payload: blogData,
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

export const actionBlogList = (count) => (dispatch) => {
  return callGet(`/api/blog?count=${count}`)
    .then(function (response) {
      let result = response.data
      dispatch({
        type: ACTION_BLOG_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_BLOG_LIST_FAIL,
      })
    }
  )
}

export const actionBlogGet = (ID) => (dispatch) => {
  return callGet(`/api/blog/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      return dispatch({
        type: ACTION_BLOG_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_BLOG_GET_FAIL,
      })
    }
  )
}
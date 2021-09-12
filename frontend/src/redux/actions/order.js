import {
  ACTION_ORDER_ADD,
  ACTION_ORDER_LIST,
  ACTION_ORDER_LIST_FAIL,
  ACTION_ORDER_GET,
  ACTION_ORDER_GET_FAIL,
} from '../actionTypes/order'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionOrderCreate = (orderData) => (dispatch) => {
  callPost('/api/admin/order', orderData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'Order Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_ORDER_ADD,
        payload: orderData,
      })
      localStorage.removeItem('cartProducts');
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

export const actionOrderList = (count) => (dispatch) => {
  return callGet(`/api/order?count=${count}`)
    .then(function (response) {
      let result = response.data
      dispatch({
        type: ACTION_ORDER_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_ORDER_LIST_FAIL,
      })
    }
  )
}

export const actionOrderGet = (ID) => (dispatch) => {
  return callGet(`/api/order/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      return dispatch({
        type: ACTION_ORDER_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_ORDER_GET_FAIL,
      })
    }
  )
}

export const actionOrderUpdate = (orderData) => dispatch => {
  callPost('/api/admin/order/update', orderData, token)
    .then((response) => {
      // dispatch({
      //   type: ACTION_ORDER_ADD,
      //   payload: orderData,
      // })
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
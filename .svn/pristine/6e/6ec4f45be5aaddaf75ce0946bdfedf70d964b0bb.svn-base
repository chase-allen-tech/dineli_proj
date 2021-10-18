import {
  ACTION_TOKEN_ADD,
  ACTION_TOKEN_LIST,
  ACTION_TOKEN_LIST_FAIL,
  ACTION_TOKEN_GET,
  ACTION_TOKEN_GET_FAIL,
} from '../actionTypes/token'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

var token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionTokenCreate = (tokenData) => (dispatch) => {
  token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null
  callPost('/api/admin/token', tokenData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_TOKEN_ADD,
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

export const actionTokenList = (count) => (dispatch) => {
  return callGet(`/api/token?count=${count}`)
    .then(function (response) {
      let result = response.data
      dispatch({
        type: ACTION_TOKEN_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_TOKEN_LIST_FAIL,
      })
    }
  )
}

export const actionTokenGet = (ID) => (dispatch) => {
  return callGet(`/api/token/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      result.monthlyGrossRent = result.yearlyGrossRent / 12
      result.monthlyNetRent = result.yearlyGrossRent / 12 - result.monthlyCosts;
      result.yearlyNetRent = (result.yearlyGrossRent / 12 - result.monthlyCosts) * 12
      result.totalInvestment = result.generatedToken * result.tokenValue
      result.expectedYield = (result.yearlyGrossRent / 12 - result.monthlyCosts) * 12 / (result.generatedToken * result.tokenValue)
      result.imageData = result.imageData.split(',')

      return dispatch({
        type: ACTION_TOKEN_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_TOKEN_GET_FAIL,
      })
    }
  )
}
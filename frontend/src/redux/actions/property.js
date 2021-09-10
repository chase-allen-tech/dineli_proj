import {
  ACTION_PROPERTY_ADD,
  ACTION_PROPERTY_LIST,
  ACTION_PROPERTY_LIST_FAIL,
  ACTION_PROPERTY_GET,
  ACTION_PROPERTY_GET_FAIL,
} from '../actionTypes/property'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionPropertyCreate = (propertyData) => (dispatch) => {
  callPost('/api/admin/property', propertyData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_PROPERTY_ADD,
        payload: propertyData,
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

export const actionPropertyList = (count) => (dispatch) => {
  return callGet(`/api/property?count=${count}`)
    .then(function (response) {
      let result = response.data
      for (let i = 0; i < result.length; i++) {
        result[i].monthlyNetRent = result[i].monthlyGrossRent - result[i].monthlyCosts;
        result[i].yearlyNetRent = (result[i].monthlyGrossRent - result[i].monthlyCosts) * 12
        result[i].totalInvestment = result[i].generatedToken * result[i].tokenValue
        result[i].expectedYield = (result[i].monthlyGrossRent - result[i].monthlyCosts) * 12
            / (result[i].generatedToken * result[i].tokenValue);

        result[i].imageData = result[i].imageData.split(',')
      }
      dispatch({
        type: ACTION_PROPERTY_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_PROPERTY_LIST_FAIL,
      })
    }
  )
}

export const actionPropertyGet = (ID) => (dispatch) => {
  return callGet(`/api/property/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      result.monthlyGrossRent = result.monthlyGrossRent
      result.monthlyNetRent = result.monthlyGrossRent - result.monthlyCosts;
      result.yearlyNetRent = (result.monthlyGrossRent - result.monthlyCosts) * 12
      result.totalInvestment = result.generatedToken * result.tokenValue
      result.expectedYield = (result.monthlyGrossRent - result.monthlyCosts) * 12 / parseFloat(result.generatedToken * result.tokenValue)
      result.imageData = result.imageData.split(',')

      return dispatch({
        type: ACTION_PROPERTY_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_PROPERTY_GET_FAIL,
      })
    }
  )
}
import {
  ACTION_CREDENTIAL_ADD,
  ACTION_CREDENTIAL_LIST,
  ACTION_CREDENTIAL_LIST_FAIL,
  ACTION_CREDENTIAL_GET,
  ACTION_CREDENTIAL_GET_FAIL,
} from '../actionTypes/credential'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionCredentialCreate = (credentialData) => (dispatch) => {
  callPost('/api/admin/credential', credentialData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_CREDENTIAL_ADD,
        payload: credentialData,
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

export const actionCredentialList = (count) => (dispatch) => {
  return callGet(`/api/credential?count=${count}`)
    .then(function (response) {
      let result = response.data;
      dispatch({
        type: ACTION_CREDENTIAL_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_CREDENTIAL_LIST_FAIL,
      })
    }
    )
}

export const actionCredentialGet = (ID) => (dispatch) => {
  return callGet(`/api/credential/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      return dispatch({
        type: ACTION_CREDENTIAL_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_CREDENTIAL_GET_FAIL,
      })
    }
    )
}

export const actionCredentialUpdate = (credentialData) => dispatch => {
  callPost('/api/admin/credential/update', credentialData, token)
    .then((response) => {
      // dispatch({
      //   type: ACTION_CREDENTIAL_ADD,
      //   payload: credentialData,
      // })
      Notification.success({
        title: 'Success',
        message: 'Credential Update Success!',
        type: 'success',
      })
    }).catch(err => {
      console.log(err);
      Notification.error({
        title: 'Failed',
        message: 'Credential update failed. Please try again.',
        type: 'Warning',
      })
    }
    )
}
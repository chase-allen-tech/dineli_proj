import {
  ACTION_TEAM_ADD,
  ACTION_TEAM_LIST,
  ACTION_TEAM_LIST_FAIL,
  ACTION_TEAM_GET,
  ACTION_TEAM_GET_FAIL,
} from '../actionTypes/team'

import { callGet, callPost, } from '../../services/axios'
import { Notification } from 'element-react'

const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null

export const actionTeamCreate = (teamData) => (dispatch) => {
  callPost('/api/admin/team', teamData, token)
    .then((response) => {
      Notification.success({
        title: 'Success',
        message: 'House Properties Submit Success!',
        type: 'success',
      })
      dispatch({
        type: ACTION_TEAM_ADD,
        payload: teamData,
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

export const actionTeamList = (count) => (dispatch) => {
  return callGet(`/api/team?count=${count}`)
    .then(function (response) {
      let result = response.data
      dispatch({
        type: ACTION_TEAM_LIST,
        payload: result,
      })
    })
    .catch((error) => {
      dispatch({
        type: ACTION_TEAM_LIST_FAIL,
      })
    }
  )
}

export const actionTeamGet = (ID) => (dispatch) => {
  return callGet(`/api/team/id?ID=${ID}`)
    .then(function (response) {
      let result = response.data
      return dispatch({
        type: ACTION_TEAM_GET,
        payload: result,
      })
    })
    .catch((error) => {
      return dispatch({
        type: ACTION_TEAM_GET_FAIL,
      })
    }
  )
}
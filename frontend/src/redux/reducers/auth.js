import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actionTypes/auth'

let user  = JSON.parse(localStorage.getItem('user'))
export const initialState = {
  token: '',
  user: user,
  logged: user ? true : false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        logged: true,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        logged: false,
      }
    case LOGOUT:
      return {
        ...state,
        logged: false,
      }
    default:
      return state
  }
}
export default auth
import {
  ACTION_USER_ADD,
  ACTION_USER_LIST,
  ACTION_USER_LIST_FAIL,
} from '../actionTypes/user'

export const initialState = {
  userData: [],
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_USER_LIST:
      return {
        ...state,
        userData: action.payload,
      }
    case ACTION_USER_LIST_FAIL:
      return {
        ...state,
        userData: [],
      }
    case ACTION_USER_ADD:
      return {
        ...state,
        userData: [...state.userData, action.payload]
      }
    default:
      return state
  }
}
export default user
import {
  ACTION_USER_ADD,
  ACTION_USER_LIST,
  ACTION_USER_LIST_FAIL,
  ACTION_USER_SET_CURRENT,
  ACTION_USER_UPDATE
} from '../actionTypes/user'

const ROLES = ['NONE', 'USER', 'MODERATOR', 'ADMIN'];

export const initialState = {
  userData: [],
  currentUser: {}
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
    case ACTION_USER_UPDATE:
      return {
        ...state,
        userData: state.userData.map(user => {
          if (user.id === action.payload.id) {
            console.log("payload", action.payload);
            return { ...user, ...action.payload, isActive:action.payload.isActive?true:false, role: [ROLES[action.payload.role]] };
          }
          return user;
        })
      }
    case ACTION_USER_SET_CURRENT:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
export default user
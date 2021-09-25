import {
  ACTION_USER_ADD,
  ACTION_USER_LIST,
  ACTION_USER_LIST_FAIL,
  ACTION_USER_UPDATE_ROLE_TYPE,
} from '../actionTypes/user'

const ROLES = ['NONE', 'USER', 'MODERATOR', 'ADMIN'];

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
    case ACTION_USER_UPDATE_ROLE_TYPE:
      return {
        ...state,
        userData: state.userData.map(user => {
          if (user.id === action.payload.id) {
            console.log("payload",action.payload);
            return {...user, role:[ROLES[action.payload.role]], type:action.payload.type};    
          }
          return user;
        })
      }
    default:
      return state
  }
}
export default user
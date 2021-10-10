import {
  ACTION_TOKEN_GET,
  ACTION_TOKEN_GET_FAIL,
  ACTION_TOKEN_LIST,
  ACTION_TOKEN_LIST_FAIL,
  ACTION_TOKEN_ADD,
} from '../actionTypes/token'

export const initialState = {
  tokenData: [],
  currentToken: {},
}

const token = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TOKEN_GET:
      return {
        ...state,
        currentToken: action.payload,
      }
    case ACTION_TOKEN_GET_FAIL:
      return {
        ...state,
        currentToken: {},
      }
    case ACTION_TOKEN_LIST:
      return {
        ...state,
        tokenData: action.payload,
      }
    case ACTION_TOKEN_LIST_FAIL:
      return {
        ...state,
        tokenData: [],
      }
    case ACTION_TOKEN_ADD:
      return {
        ...state,
        tokenData: [...state.tokenData, action.payload] 
      }
    default:
      return state
  }
}
export default token
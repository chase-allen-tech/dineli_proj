import {
  ACTION_CREDENTIAL_GET,
  ACTION_CREDENTIAL_GET_FAIL,
  ACTION_CREDENTIAL_LIST,
  ACTION_CREDENTIAL_LIST_FAIL,
  ACTION_CREDENTIAL_ADD,
} from '../actionTypes/credential'

export const initialState = {
  credentialData: [],
  currentCredential: {},
}

const credential = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CREDENTIAL_GET:
      return {
        ...state,
        currentCredential: action.payload,
      }
    case ACTION_CREDENTIAL_GET_FAIL:
      return {
        ...state,
        currentCredential: {},
      }
    case ACTION_CREDENTIAL_LIST:
      return {
        ...state,
        credentialData: action.payload,
      }
    case ACTION_CREDENTIAL_LIST_FAIL:
      return {
        ...state,
        credentialData: [],
      }
    case ACTION_CREDENTIAL_ADD:
      return {
        ...state,
        credentialData: [...state.credentialData, action.payload] 
      }
    default:
      return state
  }
}
export default credential
import {
  ACTION_FAQ_GET,
  ACTION_FAQ_GET_FAIL,
  ACTION_FAQ_LIST,
  ACTION_FAQ_LIST_FAIL,
  ACTION_FAQ_ADD,
} from '../actionTypes/faq'

export const initialState = {
  faqData: [],
  currentFaq: {},
}

const faq = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FAQ_GET:
      return {
        ...state,
        currentFaq: action.payload,
      }
    case ACTION_FAQ_GET_FAIL:
      return {
        ...state,
        currentFaq: {},
      }
    case ACTION_FAQ_LIST:
      return {
        ...state,
        faqData: action.payload,
      }
    case ACTION_FAQ_LIST_FAIL:
      return {
        ...state,
        faqData: [],
      }
    case ACTION_FAQ_ADD:
      return {
        ...state,
        faqData: [...state.faqData, action.payload] 
      }
    default:
      return state
  }
}
export default faq
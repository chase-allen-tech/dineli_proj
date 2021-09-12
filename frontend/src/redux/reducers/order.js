import {
  ACTION_ORDER_GET,
  ACTION_ORDER_GET_FAIL,
  ACTION_ORDER_LIST,
  ACTION_ORDER_LIST_FAIL,
  ACTION_ORDER_ADD,
} from '../actionTypes/order'

export const initialState = {
  orderData: [],
  currentOrder: {},
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ORDER_GET:
      return {
        ...state,
        currentOrder: action.payload,
      }
    case ACTION_ORDER_GET_FAIL:
      return {
        ...state,
        currentOrder: {},
      }
    case ACTION_ORDER_LIST:
      return {
        ...state,
        orderData: action.payload,
      }
    case ACTION_ORDER_LIST_FAIL:
      return {
        ...state,
        orderData: [],
      }
    case ACTION_ORDER_ADD:
      return {
        ...state,
        orderData: [...state.orderData, action.payload] 
      }
    default:
      return state
  }
}
export default order
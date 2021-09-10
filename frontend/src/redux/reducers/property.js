import {
  ACTION_PROPERTY_GET,
  ACTION_PROPERTY_GET_FAIL,
  ACTION_PROPERTY_LIST,
  ACTION_PROPERTY_LIST_FAIL,
  ACTION_PROPERTY_ADD,
} from '../actionTypes/property'

export const initialState = {
  propertyData: [],
  currentHouse: {},
}

const property = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PROPERTY_GET:
      return {
        ...state,
        currentHouse: action.payload,
      }
    case ACTION_PROPERTY_GET_FAIL:
      return {
        ...state,
        currentHouse: {},
      }
    case ACTION_PROPERTY_LIST:
      return {
        ...state,
        propertyData: action.payload,
      }
    case ACTION_PROPERTY_LIST_FAIL:
      return {
        ...state,
        propertyData: [],
      }
    case ACTION_PROPERTY_ADD:
      return {
        ...state,
        propertyData: [action.payload, ...state.propertyData] //state.propertyData.push(action.payload),
      }
    default:
      return state
  }
}
export default property
import {
  ACTION_TEAM_GET,
  ACTION_TEAM_GET_FAIL,
  ACTION_TEAM_LIST,
  ACTION_TEAM_LIST_FAIL,
  ACTION_TEAM_ADD,
} from '../actionTypes/team'

export const initialState = {
  teamData: [],
  currentTeam: {},
}

const team = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TEAM_GET:
      return {
        ...state,
        currentTeam: action.payload,
      }
    case ACTION_TEAM_GET_FAIL:
      return {
        ...state,
        currentTeam: {},
      }
    case ACTION_TEAM_LIST:
      return {
        ...state,
        teamData: action.payload,
      }
    case ACTION_TEAM_LIST_FAIL:
      return {
        ...state,
        teamData: [],
      }
    case ACTION_TEAM_ADD:
      return {
        ...state,
        teamData: [...state.teamData, action.payload] 
      }
    default:
      return state
  }
}
export default team
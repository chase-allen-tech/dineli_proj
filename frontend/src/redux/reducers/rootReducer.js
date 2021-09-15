import { combineReducers } from 'redux'
import auth from './auth'
import property from './property';
import token from './token';
import user from './user';
import team from './team';
import blog from './blog';
import faq from './faq';
import order from './order';
import credential from './credential';

const appReducer = combineReducers({
  auth,
  property,
  token,
  user,
  team,
  faq,
  blog,
  order,
  credential
})
const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
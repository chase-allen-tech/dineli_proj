import { combineReducers } from 'redux'
import auth from './auth'
import property from './property';
import token from './token';
import user from './user';
import team from './team';
import blog from './blog';
import faq from './faq';

const appReducer = combineReducers({
  auth,
  property,
  token,
  user,
  team,
  faq,
  blog
})
const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
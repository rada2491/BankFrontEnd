import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginReducer from './loginCredentials'

export default combineReducers({
  user: loginReducer,
  router: routerReducer
})
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginReducer from './loginCredentials'

export default combineReducers({
  login: loginReducer,
  router: routerReducer
})
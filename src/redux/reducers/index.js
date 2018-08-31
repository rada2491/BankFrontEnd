import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import loginReducer from './loginCredentials'
import createUserReducer from './User'

export default combineReducers({
  user: loginReducer,
  createUser: createUserReducer,
  router: routerReducer,
  form: formReducer
})
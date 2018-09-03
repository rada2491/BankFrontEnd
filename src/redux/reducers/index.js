import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import loginReducer from './loginCredentials'
import createUserReducer from './User'
import allUserReducer from './getAllUsers'

export default combineReducers({
  user: loginReducer,
  createUser: createUserReducer,
  getAllUsers: allUserReducer,
  router: routerReducer,
  form: formReducer
})
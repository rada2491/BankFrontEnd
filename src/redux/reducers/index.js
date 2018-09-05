import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import loginReducer from './loginCredentials'
import createUserReducer from './User'
import allUserReducer from './getAllUsers'
import serviceReducer from './service'
import accountReducer from './Accounts'
import favAccountReducer from './FavAccount'

export default combineReducers({
  user: loginReducer,
  createUser: createUserReducer,
  faAccount: favAccountReducer,
  accounts: accountReducer,
  getAllUsers: allUserReducer,
  createService: serviceReducer,
  router: routerReducer,
  form: formReducer
})
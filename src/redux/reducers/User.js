import * as a from '../actions/types'

const INITIAL_STATE = {
  createUser: [],
  userFound: [],
  isLoaded: false,
  code: 0
}

export default function createUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CREATE_USER_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: action.payload,
        isLoaded: true,
        code: action.code
      }
    case a.CREATE_USER_FAILURE:
      return {
        ...state,
        //userPayment: action.payload,
        isLoaded: false,
        code: action.code
      }
    case a.FILL_FORM:
      return {
        userFound: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
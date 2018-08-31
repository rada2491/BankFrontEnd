import * as a from '../actions/types'

const INITIAL_STATE = {
  createUser: [],
  isLoaded: false
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
        isLoaded: true
      }
    default:
      return state
  }
}
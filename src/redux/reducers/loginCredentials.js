import * as a from '../actions/types'

const INITIAL_STATE = {
  login: [],
  isLoaded: false
}

export default function newsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.LOGIN_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.LOGIN_SUCCESS:
      return {
        //...state,
        isLoaded: true
      }
    default:
      return state
  }
}
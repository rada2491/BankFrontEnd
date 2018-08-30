import * as a from '../actions/types'

const INITIAL_STATE = {
  user: [],
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
        ...state,
        user: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
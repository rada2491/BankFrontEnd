import * as a from '../actions/types'

const INITIAL_STATE = {
  user: [],
  isLoaded: false
}

export default function UserFoundReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SEARCH_USER_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.SEARCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
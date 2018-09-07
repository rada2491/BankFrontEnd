import * as a from '../actions/types'

const INITIAL_STATE = {
  accFound: [],
  isLoaded: false
}

export default function AccountFoundReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SEARCH_ACCOUNTS_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.SEARCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accFound: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
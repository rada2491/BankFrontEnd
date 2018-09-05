import * as a from '../actions/types'

const INITIAL_STATE = {
  Accounts: [],
  isLoaded: false
}

export default function AccountReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.ALL_ACCOUNTS_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.ALL_ACCOUNTS_SUCCESS:
      return {
        ...state,
        Accounts: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
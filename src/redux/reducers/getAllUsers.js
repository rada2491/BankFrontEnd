import * as a from '../actions/types'

const INITIAL_STATE = {
  AllUsers: [],
  isLoaded: false
}

export default function AllUsersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.ALL_USER_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.ALL_USER_SUCCESS:
      return {
        ...state,
        AllUsers: action.payload,
        isLoaded: true
      }
    case a.UPDATE_ALL_USERS:
      return {
        ...state,
        AllUsers: action.payload,
        isLoaded: true
      }
    default:
    console.log('yellow')
      return state
  }
}
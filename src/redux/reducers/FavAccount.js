import * as a from '../actions/types'

const INITIAL_STATE = {
  FavAccount: [],
  isLoaded: false
}

export default function AllFavReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.ALL_FAV_ACCOUNTS_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.ALL_FAV_ACCOUNTS_SUCCESS:
      return {
        ...state,
        FavAccount: action.payload,
        isLoaded: true
      }
    /*case a.UPDATE_ALL_USERS:
      return {
        ...state,
        FavAccount: action.payload,
        isLoaded: true
      }*/
    default:
      return state
  }
}
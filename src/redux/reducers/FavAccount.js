import * as a from '../actions/types'

const INITIAL_STATE = {
  FavAccount: [],
  isLoaded: false,
  NewFavAccount: []
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
    case a.CREATE_FAV_ACCOUNT:
      return {
        //...state,
        isLoaded: false
      }
    case a.CREATE_FAV_ACCOUNT_SUCCESS:
      return {
        ...state,
        code: action.code,
        isLoaded: true
      }
    default:
      return state
  }
}
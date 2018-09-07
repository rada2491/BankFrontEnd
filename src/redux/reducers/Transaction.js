import * as a from '../actions/types'

const INITIAL_STATE = {
  transaction: [],
  userFound: [],
  isLoaded: false,
  code: 0
}

export default function createUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.TRANSACTION_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: action.payload,
        code: action.code,
        isLoaded: true
      }
    case a.NO_MONEY_TRANSACTION_FAILURE:
    return {
      ...state,
      transaction: action.payload,
      code: action.code,
      isLoaded: true
    }
    default:
      return state
  }
}
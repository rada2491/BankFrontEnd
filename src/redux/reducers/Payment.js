import * as a from '../actions/types'

const INITIAL_STATE = {
  payment: [],
  userFound: [],
  isLoaded: false,
  code: 0
}

export default function PaymentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CREATE_PAYMENT_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: action.payload,
        code: action.code,
        isLoaded: true
      }
    default:
      return state
  }
}
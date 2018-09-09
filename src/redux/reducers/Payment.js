import * as a from '../actions/types'

const INITIAL_STATE = {
  payment: [],
  userFound: [],
  isLoaded: false,
  code: 0,
  userPayment: []
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
      case a.ALL_USER_PAYMENTS_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.ALL_USER_PAYMENTS:
    return {
      ...state,
      userPayment: action.payload,
      isLoaded: true
    }
    default:
      return state
  }
}
import * as a from '../actions/types'

const INITIAL_STATE = {
  createService: [],
  userFound: [],
  isLoaded: false,
  code: 0
}

export default function createUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CREATE_SERVICE_REQUEST:
      return {
        //...state,
        isLoaded: false
      }
    case a.CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        createService: action.payload,
        code: action.code,
        isLoaded: true
      }
    case a.FILL_FORM:
      return {
        userFound: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}
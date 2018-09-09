import * as a from '../actions/types'

const INITIAL_STATE = {
  createService: [],
  userFound: [],
  isLoaded: false,
  code: 0,
  AllSer: []
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
    case a.ALL_SERVICES_REQUEST:
    return {
      //...state,
      isLoaded: false
    }
    case a.ALL_SERVICES_SUCCESS:
    return {
      ...state,
      AllSer: action.payload,
      isLoaded: true
    }
    case a.UPDATE_SERVICES_SUCCESS:
    return {
      ...state,
      AllSer: action.payload,
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
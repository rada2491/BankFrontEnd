import * as a from '../actions/types'

const API = 'https://localhost:44318/api/autho/create';

export default function createUser(user) {
  console.log(user)
  return async dispatch => {
    dispatch({
      type: a.CREATE_USER_REQUEST
    })
    try {
      const response = await fetch(API, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }
      })

      const result = await response.json()
      console.log(result)
      dispatch({
        type: a.CREATE_USER_SUCCESS,
        payload: result
      })
    } catch (error) {
      dispatch({
        type: a.CREATE_USER_FAILURE,
        error: error
      })
    }
  }
}
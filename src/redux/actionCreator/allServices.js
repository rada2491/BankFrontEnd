import * as a from '../actions/types'

const API = 'https://localhost:44318/api/Services';

export default function getAllUser() {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.ALL_SERVICES_REQUEST
      })
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        const result = await response.json()
        dispatch({
          type: a.ALL_SERVICES_SUCCESS,
          payload: result
        })
        resolve();
      } catch (error) {
        dispatch({
          type: a.ALL_SERVICES_FAILURE,
          error: error
        })
        reject(error);
      }
    })
  }
}
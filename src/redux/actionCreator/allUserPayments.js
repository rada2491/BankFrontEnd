import * as a from '../actions/types'

const API = 'https://localhost:44318/api/payment';

export default function AllFavAccount() {
  let userId = sessionStorage.getItem('userId');
  let id = {

  }
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.ALL_USER_PAYMENTS_REQUEST
      })
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        //console.log(response)
        const result = await response.json()
        console.log(result)
        dispatch({
          type: a.ALL_USER_PAYMENTS_SUCCESS,
          payload: result
        })
        resolve();
      } catch (error) {
        dispatch({
          type: a.ALL_USER_PAYMENTS_FAILURE,
          error: error
        })
        reject(error);
      }
    })
  }
}
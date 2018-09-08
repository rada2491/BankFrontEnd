import * as a from '../actions/types'

const API = 'https://localhost:44318/api/admin/getUser';

let resultCode;


export default function usFound(acc) {
  console.log(acc)
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.SEARCH_USER_REQUEST
      })
      try {
        console.log(acc)
        const response = await fetch(API, {
          method: 'POST',
          body: JSON.stringify(acc),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        resultCode = response.status;
        const result = await response.json()
        dispatch({
          type: a.SEARCH_USER_SUCCESS,
          payload: result,
          code: resultCode
        })

        resolve();
      } catch (error) {
        dispatch({
          type: a.SEARCH_USER_FAILURE,
          error: error
        })
        reject(error);
      }
    })

  }
}
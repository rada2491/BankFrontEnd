import * as a from '../actions/types'

const API = 'https://localhost:44318/api/Account/getAccount';

let resultCode;


export default function accFound(acc) {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.SEARCH_ACCOUNTS_REQUEST
      })
      try {
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
          type: a.SEARCH_ACCOUNTS_SUCCESS,
          payload: result,
          code: resultCode
        })

        resolve();
      } catch (error) {
        dispatch({
          type: a.SEARCH_ACCOUNTS_FAILURE,
          error: error
        })
        reject(error);
      }
    })

  }
}
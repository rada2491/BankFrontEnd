import * as a from '../actions/types'

const API = 'https://localhost:44318/api/Account/useAccount';

let resultCode;


export default function UserAccounts() {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.ALL_ACCOUNTS_REQUEST
      })
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        resultCode = response.status;
        const result = await response.json()
        dispatch({
          type: a.ALL_ACCOUNTS_SUCCESS,
          payload: result,
          code: resultCode
        })

        resolve();
      } catch (error) {
        dispatch({
          type: a.ALL_ACCOUNTS_FAILURE,
          error: error
        })
        reject(error);
      }
    })

  }
}
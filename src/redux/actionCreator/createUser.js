import * as a from '../actions/types'

const API = 'https://localhost:44318/api/autho/create';
let codeResult;

export default function createUser(user) {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
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
        codeResult = response.status
        console.log(codeResult)
        if(codeResult === 200){
          const result = await response.json()
          dispatch({
            type: a.CREATE_USER_SUCCESS,
            payload: result,
            code: codeResult
          })
        }
        else {
          dispatch({
            type: a.CREATE_USER_FAILURE,
            code: codeResult
          })
        }
        resolve();
      } catch (error) {
        dispatch({
          type: a.CREATE_USER_FAILURE,
          error: error,
          code: codeResult
        })
        reject(error);
      }
    })
  }
}
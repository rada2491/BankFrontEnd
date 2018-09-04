import * as a from '../actions/types'

const API = 'https://localhost:44318/api/services';

let resultCode;


export default function createService(serv) {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.CREATE_SERVICE_REQUEST
      })
      try {
        const response = await fetch(API, {
          method: 'POST',
          body: JSON.stringify(serv),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        resultCode = response.status;
        const result = await response.json()
        console.log(resultCode)
        dispatch({
          type: a.CREATE_SERVICE_SUCCESS,
          payload: result,
          code: resultCode
        })

        resolve();
      } catch (error) {
        dispatch({
          type: a.CREATE_SERVICE_FAILURE,
          error: error
        })
        reject(error);
      }
    })

  }
}
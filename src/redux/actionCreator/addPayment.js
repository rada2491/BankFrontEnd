import * as a from '../actions/types'

const API = 'https://localhost:44318/api/payment';

let resultCode;


export default function NewPayment(acc) {
  console.log(acc)
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.CREATE_PAYMENT_REQUEST
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
        const result = response.json()
        console.log(result)
        dispatch({
          type: a.CREATE_PAYMENT_SUCCESS,
          payload: result,
          code: resultCode
        })
        resolve();

      } catch (error) {
        dispatch({
          type: a.CREATE_PAYMENT_FAILURE,
          error: error
        })
        reject(error);
      }
    })
  }
}
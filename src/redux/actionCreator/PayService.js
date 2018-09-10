import * as a from '../actions/types'

const API = 'https://localhost:44318/api/payment/payService';
const API2 = 'https://localhost:44318/api/payment';

let resultCode;


export default function PayService(tran) {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.PAY_SERVICE_REQUEST
      })
      try {
        const response = await fetch(API, {
          method: 'POST',
          body: JSON.stringify(tran),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        resultCode = response.status;
        if (resultCode === 200) {
          dispatch({
            type: a.PAY_SERVICE_SUCCESS,
            // payload: result,
            code: resultCode
          })
          dispatch({
            type: a.ALL_USER_PAYMENTS_REQUEST
          })
          try {
            const response = await fetch(API2, {
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
          } catch (error) {
            dispatch({
              type: a.ALL_USER_PAYMENTS_FAILURE,
              error: error
            })
          }
          resolve();
        }
        else {
          //const result = await response.json()
          dispatch({
            type: a.NO_MONEY_PAYMENT_FAILURE,
            //payload: result,
            code: resultCode
          })
          resolve();
        }
      } catch (error) {
        dispatch({
          type: a.PAY_SERVICE_FAILURE,
          error: error
        })
        reject(error);
      }
    })

  }
}
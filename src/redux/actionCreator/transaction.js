import * as a from '../actions/types'

const API = 'https://localhost:44318/api/Account/transaction';

let resultCode;


export default function NewTransacton(tran) {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.TRANSACTION_REQUEST
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
        if(resultCode === 200){
          dispatch({
            type: a.TRANSACTION_SUCCESS,
           // payload: result,
            code: resultCode
          })
  
          resolve();
        }
        else {
          const result = await response.json()
          dispatch({
            type: a.NO_MONEY_TRANSACTION_FAILURE,
            payload: result,
            code: resultCode
          })
          resolve();
        }
      } catch (error) {
        dispatch({
          type: a.TRANSACTION_FAILURE,
          error: error
        })
        reject(error);
      }
    })

  }
}
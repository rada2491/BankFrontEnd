import * as a from '../actions/types'

const API = 'https://localhost:44318/api/FavAccount';

let resultCode;


export default function NewFavAccount(acc) {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.CREATE_FAV_ACCOUNT_REQUEST
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
        //console.log(result)
        dispatch({
          type: a.CREATE_FAV_ACCOUNT_SUCCESS,
          code: resultCode
        })

        resolve();
      } catch (error) {
        dispatch({
          type: a.CREATE_FAV_ACCOUNT_FAILURE,
          error: error
        })
        reject(error);
      }
    })
  }
}
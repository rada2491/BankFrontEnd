import * as a from '../actions/types'

const API = 'https://localhost:44318/api/FavAccount';

export default function AllFavAccount() {
  return async dispatch => {
    return new Promise(async function (resolve, reject) {
      dispatch({
        type: a.ALL_FAV_ACCOUNTS_REQUEST
      })
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        const result = await response.json()
        dispatch({
          type: a.ALL_FAV_ACCOUNTS_SUCCESS,
          payload: result
        })
        resolve();
      } catch (error) {
        dispatch({
          type: a.ALL_FAV_ACCOUNTS_FAILURE,
          error: error
        })
        reject(error);
      }
    })
  }
}
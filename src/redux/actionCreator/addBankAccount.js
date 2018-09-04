import * as a from '../actions/types'

const API = 'https://localhost:44318/api/Account';
const API2 = 'https://localhost:44318/api/admin'

export default function addBankAccount(newObj, lastPay) {

  return async dispatch => {
    dispatch({
      type: a.UPDATE_ALL_USERS,
      payload: lastPay
    })

    try {
      await fetch(API, {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }
      }).then(success => console.log('Success:', success))
        .catch(error => console.log('Error:', error))

      try {
        const response = await fetch(API2, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          }
        })
        const result = await response.json()
        dispatch({
          type: a.UPDATE_ALL_USERS,
          payload: result
        })
      } catch (error) {
        dispatch({
          type: a.ALL_USER_FAILURE,
          error: error
        })
      }
    } catch (error) {
      dispatch({
        type: a.UPDATE_USER_FAILURE,
        error: error
      })
    }
  }
}
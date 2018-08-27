import * as a from '../actions/types'

const API = 'https://localhost:44318/api/autho/login';
const API2 = 'https://localhost:44318/api/admin';
const API3 = 'https://localhost:44318/api/client/';

export default function loginCredentials(credentials) {
  return async dispatch => {
    dispatch({
      type: a.LOGIN_REQUEST
    })
    let token;
    let autho;
    try {
      await fetch(API, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => { return response.json() })
        .then(body => {
          token = body.token
          autho = body.authorization
        })
        .then(success => console.log('Success:', success))
        .catch(error => console.log('Error:', error))
      if (autho === 'Admin') {
        const myHeaders = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        });
        const response2 = await fetch(API2, {
          method: 'GET',
          headers: myHeaders
        })
        const result2 = await response2.json()
        console.log(result2)

        dispatch({
          type: a.LOGIN_SUCCESS,
          payload: result2
        })
      }

      const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
      const response2 = await fetch(API3+autho, {
        method: 'GET',
        headers: myHeaders
      })
      const result2 = await response2.json()
      console.log(result2)
      dispatch({
        type: a.LOGIN_SUCCESS,
        payload: result2
      })

    } catch (error) {
      dispatch({
        type: a.LOGIN_FAILURE,
        error: error
      })
    }
  }
}
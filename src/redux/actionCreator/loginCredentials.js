import * as a from '../actions/types'

const API = 'https://localhost:44318/api/autho/login';
const API2 = 'https://localhost:44318/api/admin';
const API3 = 'https://localhost:44318/api/client/';
//const API4 = 'https://localhost:44318/api/account/transaction';
let token, autho, email, id, name;

/* Test transaction */
/*let tran = {
  'origin': '7946138520',
  'destiny': '79461385',
  'mount': 25000000000000000
}*/

export default function loginCredentials(credentials) {
  return async dispatch => {
    dispatch({
      type: a.LOGIN_REQUEST
    })
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
          email = body.userEmail
          id = body.id
          name = body.userName
        })
        .then(success => console.log('Success:', success))
        .catch(error => console.log('Error:', error))

      sessionStorage.setItem("token", token)
      sessionStorage.setItem("userId", id)
      sessionStorage.setItem("userName", name)
      sessionStorage.setItem("userEmail", email)
      sessionStorage.setItem("Authorization", autho)
      sessionStorage.setItem("login", true)
      /*console.log(sessionStorage.getItem("token"))
      console.log(sessionStorage.getItem("userId"))
      console.log(sessionStorage.getItem("userName"))
      console.log(sessionStorage.getItem("userEmail"))
      console.log(sessionStorage.getItem("Authorization"))*/

      /*console.log(tran)
      await fetch(API4, {
        method: 'POST',
        body: JSON.stringify(tran),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }
      }).then(success => console.log('Success:', success))
        .catch(error => console.log('Error:', error))*/

      if (sessionStorage.getItem("Authorization") === "Admin") {
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
      const response2 = await fetch(API3, {
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
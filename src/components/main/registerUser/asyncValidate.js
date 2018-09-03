import * as a from '../../../redux/actions/types'
const API = 'https://localhost:44318/api/admin';

export default function asyncValidate(values) {
  return async dispatch => {
    dispatch({
      type: a.CHECK_ID
    })
    try {
      const response = await fetch(API, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await response.json()

      //if()
    } catch (error) {
      
    }
  }
}


/*(values, dispatch) => {

  return new Promise((resolve, reject) => {
    dispatch({
      type: types.GET_USERNAME_DATA,
      promise: client => client.post('/api', values),
    }).then((result) => {
      if (result.data.code !== 200) reject({username: 'That username is taken'});
      else resolve();
    });
  });
};*/

const asyncValidate = (values /*, dispatch */) => {
  const response = await fetch()
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' }
    }
  })
}

export default asyncValidate
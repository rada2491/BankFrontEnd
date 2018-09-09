import React, { Component } from 'react';
import UserPayments from '../../components/main/userPayments/'

import AllUserPayments from '../../redux/actionCreator/allUserPayments'

class UserPaymentContainer extends Component {



  render() {
    return (
      <div>
        <UserPayments />
      </div>
    );
  }
}

export default UserPaymentContainer;
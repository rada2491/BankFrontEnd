import React, { Component } from 'react';
import UserPayments from '../../components/main/userPayments/'
import { connect } from 'react-redux'
import AllUserPayments from '../../redux/actionCreator/allUserPayments'

class UserPaymentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userPayments: []
    }
  }
  
  async componentWillMount() {
    await this.props.AllUserPayments();
    this.setState({
      userPayments: this.props.payment
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.payment !== prevProps.payment){
      this.setState({
        userPayments: this.props.payment
      })
    }
  }

  render() {
    const {userPayments} = this.state
    const {Accounts} = this.props
    return (
      <div>
        <UserPayments usPayments={userPayments} allAc={Accounts}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payment: state.payment.userPayment || [],
  Accounts: state.accounts.Accounts
})

const mapDispatchToProps = (dispatch, allProps) => {
  return {
    AllUserPayments: async () => {
      await dispatch(AllUserPayments())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPaymentContainer);
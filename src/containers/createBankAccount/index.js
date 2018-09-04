import React from 'react';
import { connect } from 'react-redux'
import { Values } from "redux-form-website-template";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getAllUsers from '../../redux/actionCreator/allUsers'
import CreateBankAccount from '../../components/main/createBankAccount/index'

class CreateBankAccountContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      AllUsers: []
    }
  }

  async componentWillMount() {
    await this.props.getAllUsers()
    
  }

  render() {
    const { AllUsers } = this.props
    return (
      <div>
        <CreateBankAccount allUs={AllUsers} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  AllUsers: state.getAllUsers.AllUsers
})

const mapDispatchToProps = {
  getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBankAccountContainer);
import React from 'react';
import { connect } from 'react-redux'
import { Values } from "redux-form-website-template";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import createNewUser from '../../redux/actionCreator/createUser'
import RegisterUser from '../../components/main/registerUser/index'

class RegisterUserContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      createUser: []
    }
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.createNewUser(values)
  }

  render() {
    return (
      <div>
        <RegisterUser onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  createUser: state.createUser.createUser
})

const mapDispatchToProps = {
  createNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserContainer);
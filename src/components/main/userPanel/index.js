import React from 'react';
import { Redirect } from 'react-router'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

/*import './style.scss'
import './util.scss'*/

var user, password;

import Header from '../../header/'

//Aside
//import UserAside from '../userAside/'
import AdminAside from '../adminAside/'

import ClientHome from '../userHome/'

import UserAccounts from '../../../redux/actionCreator/userAccounts'

class UserPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  async componentWillMount() {
    await this.props.UserAccounts();
    console.log(this.props.Accounts)
  }

  render() {
    const { Accounts } = this.props
    if (sessionStorage.getItem("Authorization") === "Admin") {
      return (
        <div>
          Hola admi
          </div>
      );
    }
    else {
      if (sessionStorage.getItem("Authorization") === 'Client') {
        return (
          <ClientHome state={Accounts} />
        );
      }
    }
  }
}

/*const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  //loginCredentials
}*/

const mapStateToProps = state => ({
  Accounts: state.accounts.Accounts
})

const mapDispatchToProps = {
  UserAccounts
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
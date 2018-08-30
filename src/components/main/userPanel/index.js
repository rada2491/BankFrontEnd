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

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  render() {
    if (sessionStorage.getItem("login") === 'true') {
      if (sessionStorage.getItem("Authorization") === "Admin") {
        return (
          <div>
            <Header />
            <AdminAside />
          </div>
        );
      }
      else {
        if (sessionStorage.getItem("Authorization") === 'Client') {
          return (
            <h1>Hola cliente</h1>
          );
        }
      }
    }
    else {
      return (
        <Redirect to={'/'} />
      );
    }
  }
}

/*const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  //loginCredentials
}*/

export default Example;
import React from 'react';
import { Redirect } from 'react-router'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import './style.scss'
//import './util.scss'

var user, password;

import Header from '../../components/header/'
import lol from './lala'

//Aside
//import UserAside from '../userAside/'
import Panel from '../../components/main/userPanel/index'

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  render() {
    return (
      <Panel />
    )

  }
}

/*const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  //loginCredentials
}*/

export default Example;
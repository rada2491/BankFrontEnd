import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { map } from 'ramda';
import { Animated } from "react-animated-css";
import 'babel-polyfill';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.css';
import 'babel-polyfill';

// Login page
import Login from './pages/home/'
import Panel from './pages/panel/'
import lol from './containers/panel/lala'
import Header from './components/header/'
import AdminAside from './components/main/adminAside/'

import Complement from './Complement'


class App extends Component {

  async componentWillMount() {
    await sessionStorage.setItem('login', 'false')
  }

  render() {
    if (sessionStorage.getItem('login') === 'false') {
      if (sessionStorage.getItem('Resp') === 'true') {
        return (
          <Complement />
        )
      }
      else {
        return (
          <Route exact path="/" component={Login} />
        )
      }
    }
    else {
      return (
        <Complement />
      )
    }
  }
}

export default App;

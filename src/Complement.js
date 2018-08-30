import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { map } from 'ramda';
import { Animated } from "react-animated-css";
import 'babel-polyfill';
//import './scss/animate.css';
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


class Complement extends Component {
  render() {
    if (sessionStorage.getItem("login") === 'true') {
      if (sessionStorage.getItem("Authorization") === "Admin") {
        return (
          <div>
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <div>
                    <div className='main'>
                    </div>
                    <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
                      <AdminAside />
                    </nav>
                  </div>
                </div>
                <div className="col-md-10">
                  <main>
                    <Switch>
                      <Route path='/panel/' component={Panel} />
                      <Route exact path="/panel1" component={() => <div>qweqwe</div>} />
                      <Route path="/panel2" component={lol} />
                    </Switch>
                  </main>
                </div>
              </div>
            </div>
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

export default Complement;

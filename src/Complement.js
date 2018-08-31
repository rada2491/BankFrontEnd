import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { map } from 'ramda';
import { Animated } from "react-animated-css";
import { Values } from "redux-form-website-template";
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
import Footer from './components/footer/'
import Aside from './components/main/adminAside/'

//Admin
import PageRegisterUser from './pages/registerUser/'


class Complement extends Component {
  render() {

    if (sessionStorage.getItem("Authorization") === "Admin") {
      return (
        <div >
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <div className='main'>
                  </div>
                  <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
                    <Aside />
                  </nav>
                </div>
              </div>
              <div className="col-md-10">
                <main>
                  <Switch>
                    <Route path='/panel' component={Panel} />
                    <Route exact path="/panelRegisterUser" component={PageRegisterUser} />
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
          <div>
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <div>
                    <div className='main'>
                    </div>
                    <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
                      <Aside />
                    </nav>
                  </div>
                </div>
                <div className="col-md-10">
                  <main>
                    <Switch>
                      <Route path='/panel' component={Panel} />
                      <Route exact path="/panel1" component={() => <div>Cliente</div>} />
                      <Route path="/panel2" component={lol} />
                    </Switch>
                  </main>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }



  }
}

export default Complement;

/* al inicio 
if (sessionStorage.getItem("login") === 'true') {
  cierra antes del else 
}

este else 
else {
      return (
        <Redirect to={'/'} />
      );
    }
*/

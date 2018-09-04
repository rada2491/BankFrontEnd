import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'babel-polyfill';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.css';
import 'babel-polyfill';

// Login page
import Panel from './pages/panel/'
import lol from './containers/panel/lala'
import Header from './components/header/'
import Aside from './components/main/adminAside/'

//Admin
import PageRegisterUser from './pages/registerUser/'
import PageCreateBankAccount from './pages/createbankAccount/'
import PageCreateService from './pages/createService/'


class Complement extends Component {
  render() {

    if (sessionStorage.getItem("Authorization") !== "") {
      return (
        <div >
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-sm-2 col-xs-2 aside-container">
                <div>
                  <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
                    <Aside />
                  </nav>
                </div>
              </div>
              <div className="col-md-10 col-sm-10 col-xs-10">
                <main>
                  <Switch>
                    <Route path='/panel' component={Panel} />
                    <Route exact path="/panelRegisterUser" component={PageRegisterUser} />
                    <Route path="/panelCreateAccount" component={PageCreateBankAccount} />
                    <Route path="/panelCreateService" component={PageCreateService} />
                  </Switch>
                </main>
              </div>
            </div>
          </div>

        </div>
      );
    }
    else {
      return (
        <div>
        </div>
      );
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

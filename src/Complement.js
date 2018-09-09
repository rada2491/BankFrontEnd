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

//Client
import PageAddFavAccount from './pages/addFavAccount'


class Complement extends Component {
  render() {

    if (sessionStorage.getItem("Authorization") !== "") {
      return (
        <div >
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 aside-container">
                <div>
                  
                    <Aside />
                  
                </div>
              </div>
              <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
                <main>
                  <Switch>
                    <Route path='/panel' component={Panel} />
                    <Route exact path="/panelRegisterUser" component={PageRegisterUser} />
                    <Route path="/panelCreateAccount" component={PageCreateBankAccount} />
                    <Route path="/panelCreateService" component={PageCreateService} />
                    <Route path="/addFavAccount" component={PageAddFavAccount} />
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

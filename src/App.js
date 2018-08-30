import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
import Panel from './components/header/'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main>
              <React.Fragment>
                <Route exact path="/" component={Panel} />
                <Route path='/panel' component={Panel} />
              </React.Fragment>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

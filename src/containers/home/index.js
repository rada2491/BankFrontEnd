import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/main/loginForm/';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}
export default HomeContainer;
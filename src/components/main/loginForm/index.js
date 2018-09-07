import React from 'react';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import './style.scss'
import './util.scss'

var user, password;

import loginCredentials from '../../../redux/actionCreator/loginCredentials'

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false,
      user: []
    }
    this.sendSubmit = this.sendSubmit.bind(this);
  }

  sendSubmit() {
    user = document.getElementById('userId').value;
    password = document.getElementById('userPassword').value;

    let logCre = {
      "email": user,
      "password": password
    }

    this.props.loginCredentials(logCre)
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user !== undefined) {
        sessionStorage.setItem("token", this.props.user.token)
        sessionStorage.setItem("userId", this.props.user.id)
        sessionStorage.setItem("userName", this.props.user.userName)
        sessionStorage.setItem("userEmail", this.props.user.userEmail)
        sessionStorage.setItem("Authorization", this.props.user.authorization)
        sessionStorage.setItem("login", 'true')
        sessionStorage.setItem('Resp', sessionStorage.getItem('login'))
        this.setState({
          login: true
        })
      }
    }
  }

  render() {
    const { login } = this.state
    if (login) {
      return (
        <Redirect to={'/panel'} />
      );
    }
    else {
      return (
        <div>
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100 p-t-30 p-b-50">
                <span className="login100-form-title p-b-41">
                  Account Login
            </span>
                <Form className="login100-form validate-form p-b-33 p-t-5 form-style">
                  <img src="https://res.cloudinary.com/radacloud/image/upload/v1536014090/React-Bank/Bank.png" alt=""/>
                  <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <Input id='userId' className="input100" type="text" name="username" placeholder="User name" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <Input id='userPassword' className="input100" type="password" name="pass" placeholder="Password" />
                  </div>
                  <div className="container-login100-form-btn m-t-32">
                    <Button className='login100-form-btn' onClick={this.sendSubmit} >Login</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = {
  loginCredentials
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
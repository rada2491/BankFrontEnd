import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';


export default class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    if (sessionStorage.getItem('Authorization') === 'Admin') {
      return (
        <aside className="left-side sidebar-offcanvas cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">
          <section className="sidebar">
            <ul className="sidebar-menu">
              <li>
                <Link key='1' to='/panelRegisterUser'>Create User</Link>
              </li>
              <li className="active">
                <Link key='2' to='/panelCreateAccount'>Create Account</Link>
              </li>

              <li>
                <Link key='3' to='/panelCreatePayment'>Add new Payment</Link>
              </li>
              <li>
                <Link key='4' to='/panel'>Update Client</Link>
              </li>
              <li>
                <Link key='5' to='/panel'>Delete account</Link>
              </li>
              <li>
                <Link to='/panel1'>lala</Link>
                <Link to='/panel2'>lala</Link>
              </li>
            </ul>
          </section>
        </aside>
      );
    }
    else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <aside className="left-side sidebar-offcanvas cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">
                <section className="sidebar">
                  <ul className="sidebar-menu">
                    <li>
                      <Link key='1' to='/panel'>Balance</Link>
                    </li>
                    <li className="active">
                      <Link key='2' to='/panel'>Add Favorite Account</Link>
                    </li>

                    <li>
                      <Link key='3' to='/panel'>Payments</Link>
                    </li>
                    <li>
                      <Link key='4' to='/panel'>Transactions</Link>
                    </li>
                    <li>
                      <Link key='5' to='/panel'>Transaction History</Link>
                    </li>
                    <li>
                      <Link to='/panel1'>lala</Link>
                      <Link to='/panel2'>lala</Link>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
        </div>
      );
    }
  }
}

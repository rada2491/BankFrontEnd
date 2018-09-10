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
        <nav className="menu">
          <span className="hambgr"></span>
          <ul>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='1' to='/panelRegisterUser'>Create User</Link>
            </li>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='2' to='/panelCreateAccount'>Create Account</Link>
            </li>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='3' to='/panelCreateService'>Add new Payment</Link>
            </li>
          </ul>
        </nav>
      );
    }
    else {
      return (
        <nav className="menu">
          <span className="hambgr"></span>
          <ul>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='1' to='/panel'>Balance</Link>
            </li>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='2' to='/addFavAccount'>Favorite Account / Transactions</Link>
            </li>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='3' to='/userPayment'>Payments</Link>
            </li>
            <li className="nava-item cbp-spmenu-vertical">
              <Link key='4' to='/panel'>Transaction History</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

/*
<aside className="left-side sidebar-offcanvas cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left aside-position textformat">
          <section className="sidebar">
            <ul className="sidebar-menu">
              <li className="nava-item ">
                <Link key='1' to='/panel'>Balance</Link>
              </li>
              <li className="nava-item ">
                <Link key='2' to='/addFavAccount'>Favorite Account / Transactions</Link>
              </li>
              <li className="nava-item ">
                <Link key='3' to='/panel'>Payments</Link>
              </li>
              <li className="nava-item ">
                <Link key='4' to='/panel'>Transaction History</Link>
              </li>
            </ul>
          </section>
        </aside> */


        /*admin aside*/
        /*
        <aside className="left-side sidebar-offcanvas cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left aside-position textformat ">
          <section className="sidebar ">
            <ul className="sidebar-menu">
              <li className="nava-item ">
                <Link key='1' to='/panelRegisterUser'>Create User</Link>
              </li>
              <li className="nava-item">
                <Link key='2' to='/panelCreateAccount'>Create Account</Link>
              </li>
              <li className="nava-item">
                <Link key='3' to='/panelCreateService'>Add new Payment</Link>
              </li>
              <li className="nava-item">
                <Link key='4' to='/panel'>Update Client</Link>
              </li>
            </ul>
          </section>
        </aside>
        */
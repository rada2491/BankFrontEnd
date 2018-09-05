import React from 'react';
import './style.scss'

export default ({ state }) => {
  //const { items } = this.props
  return (
    <div className="container-fluid RB-register">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 RB-user-Account__header">
          <h1>User Accounts</h1>
          <h3>{sessionStorage.getItem('userName')}</h3>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <h2>Account Number</h2>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <h2>Currency</h2>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <h2>Balance</h2>
        </div>
        {
          state.map(acc => {
            return (
              <div className="col-md-12" key={acc.accountNumber}>
                <div className='row'>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <h2>{acc.accountNumber}</h2>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <h2>{acc.currency}</h2>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <h2>{acc.balance}</h2>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

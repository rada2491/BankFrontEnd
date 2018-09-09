import React from 'react';
import './style.scss'

export default ({ state }) => {
  //const { items } = this.props
  return (
    <div className="container-fluid RB-register">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 RB-user-Account__header">
          <h1 className="espacio">User Accounts</h1>
          <h3 className="espacio espacio__extra">{sessionStorage.getItem('userName')}</h3>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4 fondo">
          <h2>Account Number</h2>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4 fondo">
          <h2>Currency</h2>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4 fondo">
          <h2>Balance</h2>
        </div>
        {
          state.map(acc => {
            return (
              <div className="col-md-12" key={acc.accountNumber}>
                <div className='row'>
                  <div className="col-md-4 col-sm-4 col-xs-4 texto">
                    <a>{acc.accountNumber}</a>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 texto">
                    <a>{acc.currency}</a>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 texto">
                    <a>{acc.balance}</a>
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

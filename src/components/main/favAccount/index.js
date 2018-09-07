import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input,
  Button, ModalHeader, ModalBody, ModalFooter, Collapse
} from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './style.scss'

import accFound from '../../../redux/actionCreator/accFound'

let hover, boot = true
let bord = false;
let acNumber;

const columns = [{
  dataField: 'socialNumber',
  filter: textFilter(),
  text: 'Social Number'
}, {
  dataField: 'accountOwner',
  text: 'User Name'
}, {
  dataField: 'accountNumber',
  text: 'Account number'
},
{
  dataField: 'currency',
  text: 'Currency'
}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: '#9FBAA1',
  /*onSelect: (row, isSelect, rowIndex, e) => {
  }*/

};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    userId = row.socialNumber;
    accoNumber = Math.floor((Math.random() * 100000000) + 1);
  }
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
class FavoriteAccountModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      collapse: true,
      collapseAdd: false,
      accF: []
    }
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.load = this.load.bind(this)
  }

  async load() {
    acNumber = this.props.accNum
    let num = {
      'accountNumber': acNumber
    }
    await this.props.accFound(num)

    this.props.found(this.props.accF.socialNumber, this.props.accF.accountOwner)
  }

  toggle() {
    if (this.state.collapseAdd === true) {
      this.setState({
        collapseAdd: !this.state.collapseAdd,
        collapse: !this.state.collapse
      });
    }
    this.setState({ collapse: !this.state.collapse });
  }

  toggle2() {
    if (this.state.collapse === true) {
      this.setState({
        collapseAdd: !this.state.collapseAdd,
        collapse: !this.state.collapse
      });
    }
    this.setState({ collapseAdd: !this.state.collapseAdd });
  }

  render() {
    const users = this.props.favAccount
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { accF } = this.props
    return (
      <div className='RB-FA-Container'>
        <Button className='Fav-Button' color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Favorite Accounts</Button>
        <Collapse isOpen={this.state.collapse}>
          <BootstrapTable
            id='mytable'
            classes="table-striped table-content"
            bordered={bord}
            hover={hover}
            bootstrap4={boot}
            keyField='socialNumber'
            data={users}
            columns={columns}
            filter={filterFactory()}
            selectRow={selectRow}
            pagination={paginationFactory()}
            rowEvents={rowEvents}></BootstrapTable>
        </Collapse>
        <Button color="info" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>Add Favorite Account</Button>
        <Collapse isOpen={this.state.collapseAdd}>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group input-group-icon RB-register__container">
                <label htmlFor="text">Account Number</label>
                <Field className='input'
                  name="accountNumber"
                  component={renderField}
                  type="text" />
              </div>
              <div className="input-group input-group-icon RB-register__container">
                <label htmlFor="text">User Social Number</label>
                <Field name="socialNumber"
                  component={renderField}
                  type="text" />
              </div>
              <div className="input-group input-group-icon RB-register__container">
                <label htmlFor="name">User Name</label>
                <Field name="accountOwner"
                  component={renderField}
                  type="text" />
              </div>
              <button type="button" className="btn btn-primary" onClick={this.load}>Search Account</button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
            </div>
          </form>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accF: state.accFound.accFound
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
    accFound: async (values) => {
      await dispatch(accFound(values))
    },
    found: async (socialNumber, accountOwner) => {
      await dispatch(change('favAccount', 'socialNumber', socialNumber))
      await dispatch(change('favAccount', 'accountOwner', accountOwner))
    }
  }

}

FavoriteAccountModule = reduxForm({
  form: 'favAccount', // a unique name for this form
})(FavoriteAccountModule);

const selector = formValueSelector('favAccount');

FavoriteAccountModule = connect(
  state => {
    const accNum = selector(state, 'accountNumber')
    return ({
      accNum
    })
  }
)(FavoriteAccountModule)


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteAccountModule);
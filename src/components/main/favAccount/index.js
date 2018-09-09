import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input,
  Button, ModalHeader, ModalBody, ModalFooter, Collapse,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './style.scss'
import NewTransaction from '../../../redux/actionCreator/transaction'
import accFound from '../../../redux/actionCreator/accFound'

let hover, boot = true
let bord = false;
let acNumber;
let destyAccount, accoOwn, ownerSocial, accCurren, orinAc, amoS;
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

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    destyAccount = row.accountNumber,
      accoOwn = row.accountOwner,
      ownerSocial = row.socialNumber,
      accCurren = row.currency
  }
};
class FavoriteAccountModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      collapse: true,
      collapseAdd: false,
      traModal: false,
      accF: [],
      dropdownOpen: false,
      resCode: 0,
      transaction: [],
      tranSuccess: false,
      tranFail: false
    }
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.load = this.load.bind(this)
    this.openModal = this.openModal.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }

  async load() {
    acNumber = this.props.accNum
    let num = {
      'accountNumber': acNumber
    }
    await this.props.accFound(num)

    this.props.found(this.props.accF.socialNumber, this.props.accF.accountOwner)
  }

  openModal() {
    this.setState({
      traModal: !this.state.traModal
    })
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

  toggle3() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggle4() {
    this.setState({
      tranSuccess: !this.state.tranSuccess,
      traModal: !this.state.traModal
    });
  }

  toggle5() {
    this.setState({
      tranFail: !this.state.tranFail,
      traModal: !this.state.traModal
    });
  }

  async sendSubmit() {
    let accSelected = document.getElementById('accoSelect');
    let originAccount = accSelected.options[accSelected.selectedIndex].value;
    orinAc = originAccount;
    let AmountS = document.getElementById('amount').value;
    amoS = AmountS
    let AmountF = parseFloat(AmountS);
    let transaction = {
      "origin": originAccount,
      "destiny": destyAccount,
      "currency": accCurren,
      "amount": AmountF
    }
    await this.props.NewTransaction(transaction)
    if (this.props.resCode === 200) {
      this.setState({
        tranSuccess: !this.state.tranSuccess
      })
    }
    if(this.props.resCode === 400){
      this.setState({
        tranFail: !this.state.tranFail
      })
    }
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const users = this.props.favAccount
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { accF } = this.props
    const { allAc } = this.props
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
          <Button className='submit-User' color='primary' onClick={this.openModal}>Transaction</Button>
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
        <Modal isOpen={this.state.traModal} className={this.props.className}>
          <ModalHeader toggle={this.openModal}>Transaction Form</ModalHeader>
          <ModalBody>
            <Form className='SA-header__modal'>
              <FormGroup row>
                <Label for="titleInput" md={4}>Destiny Account</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={destyAccount} name="title" id="desAccount" placeholder="Destiny Account" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Account Owner</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={accoOwn} name="title" id="accountOwner" placeholder="Account Owner" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={8}>Owner Social Number</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={ownerSocial} name="title" id="owSocial" placeholder="Owner Social Number" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Account Currency</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={accCurren} name="title" id="desCurrency" placeholder="Account Currency" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" md={12}>Select your account</Label>
                <Col md={12}>
                  <Input type="select" name="select" id="accoSelect">
                    {
                      allAc.map(accounts => {
                        return (
                          <option key={accounts.accountNumber}
                            value={accounts.accountNumber}>
                            {accounts.accountNumber} - {accounts.currency}
                          </option>
                        )
                      })
                    }
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Amount</Label>
                <Col md={12}>
                  <Input type="text" name="title" id="amount" placeholder="Amount" />
                </Col>
              </FormGroup>
              <ModalFooter>
                <Button color='primary' onClick={this.sendSubmit}>Submit</Button>
                <Button color='primary' onClick={this.openModal}>Close</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.tranSuccess} toggle={this.toggle4} className={this.props.className}>
          <ModalHeader toggle={this.toggle4}>Succesful Transaction</ModalHeader>
          <ModalBody>
            <p>Destiny Account: {destyAccount}</p>
            <p>Origin Account: {orinAc}</p>
            <p>Amount: {amoS} {accCurren}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle4}>Close</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.tranFail} toggle={this.toggle5} className={this.props.className}>
          <ModalHeader toggle={this.toggle5}>Failed Transaction</ModalHeader>
          <ModalBody>
            <p>Not enough money in the origin account.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle5}>Close</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  accF: state.accFound.accFound,
  resCode: state.transaction.code,
  transaction: state.transaction.transaction
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
    accFound: async (values) => {
      await dispatch(accFound(values))
    },
    found: async (socialNumber, accountOwner) => {
      await dispatch(change('favAccount', 'socialNumber', socialNumber))
      await dispatch(change('favAccount', 'accountOwner', accountOwner))
    },
    NewTransaction: async (transaction) => {
      await dispatch(NewTransaction(transaction))
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
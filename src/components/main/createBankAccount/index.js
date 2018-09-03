import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Form, FormGroup, Label, Modal, Col, Input, Button, Nav, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './style.scss'

let userId, accoNumber, accCurrency, accBalance;

const columns = [{
  dataField: 'socialNumber',
  filter: textFilter(),
  text: 'Social Number'
}, {
  dataField: 'name',
  text: 'User Name'
}, {
  dataField: 'email',
  text: 'User email'
},
{
  dataField: 'accounts.length',
  text: 'User Accounts'
}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: '#9FBAA1',
  /*onSelect: (row, isSelect, rowIndex, e) => {
    console.log(row.socialNumber);
    console.log(isSelect);
    console.log(rowIndex);
    console.log(e);
  }*/

};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    userId = row.socialNumber;
    accoNumber = Math.floor((Math.random() * 100000000) + 1);
  }
};

class CreateBankAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      modal: false
    }
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount() {
    this.setState({
      users: this.props.state
    })
  }

  openModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  sendSubmit() {
    accCurrency = document.getElementById('currency').value;
    accBalance = document.getElementById('balance').value;

    console.log(typeof accCurrency, typeof accBalance, typeof userId, typeof accoNumber)

    let addAccount = {
      "accountOwner": userId, "accountNumber": accoNumber, "currency": accCurrency
      , "balance": accBalance.toString()
    }

    //this.props.updateNews(addNew)
    /*this.setState({
      modal: !this.state.modal
    })*/
  }

  render() {
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-12">
            <BootstrapTable
              keyField='socialNumber'
              data={this.props.state}
              columns={columns}
              filter={filterFactory()}
              selectRow={selectRow}
              pagination={paginationFactory()}
              rowEvents={rowEvents} />
          </div>
          <Button color='primary' onClick={this.openModal}>Add Account</Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Account</ModalHeader>
          <ModalBody>
          <Form className='SA-header__modal'>
              <FormGroup row>
                <Label for="titleInput" md={4}>Social Number</Label>
                <Col md={10}>
                  <Input type="text" value={userId} disabled='true' name="title" id="socialNumber" placeholder="Title of the new" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Account Number</Label>
                <Col md={10}>
                <Input type="text" value={accoNumber} disabled='true' name="title" id="accountNumber" placeholder="Title of the new" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Currency</Label>
                <Col md={10}>
                <Input type="text" name="title" id="currency" placeholder="Currency" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Balance</Label>
                <Col md={10}>
                <Input type="text" name="title" id="balance" placeholder="Balance" />
                </Col>
              </FormGroup>
              <ModalFooter>
                <Button color='primary' onClick={this.sendSubmit}>Submit</Button>
                <Button color='primary' onClick={this.openModal}>Close</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default CreateBankAccount

//<BootstrapTable keyField='id' data={users} columns={columns} filter={filterFactory()} />
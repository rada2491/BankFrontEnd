import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input,
  Button, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './style.scss'

let userId, accoNumber, accCurrency, accBalance;

let boot, hover = true;
let bord = false
import addBankAccount from '../../../redux/actionCreator/addBankAccount'

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
      users:  this.props.allUs,
      modal: false
    }
    this.openModal = this.openModal.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }

   componentWillMount() {
     this.setState({
      users: this.props.allUs
    })
  }



  async componentDidUpdate(prevProps){
    if(this.props.allUs !== prevProps.allUs){
      this.setState({
        users: this.props.allUs
      })
    }
  }

  openModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  async sendSubmit() {
    accCurrency = document.getElementById('currency').value;
    accBalance = document.getElementById('balance').value;
    let addAccount = {
      "accountOwner": userId, "accountNumber": accoNumber, "currency": accCurrency
      , "balance": accBalance.toString()
    }
    this.props.addBankAccount(addAccount, this.state.users)
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const { users } = this.state
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-8">
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
            <Button className='submit-User' color='primary' onClick={this.openModal}>Add Account</Button>
          </div>

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

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  addBankAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBankAccount);

//<BootstrapTable keyField='id' data={users} columns={columns} filter={filterFactory()} />
/*<BootstrapTable
              keyField='socialNumber'
              data={this.props.state}
              columns={columns}
              filter={filterFactory()}
              selectRow={selectRow}
              pagination={paginationFactory()}
              rowEvents={rowEvents} />*/
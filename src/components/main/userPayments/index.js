import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input,
  Button, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';

import PayService from '../../../redux/actionCreator/PayService'

let boot, hover = true;
let bord = false
let serviceId, servicesName, servicesAmount

const columns = [{
  dataField: 'servicesName',
  filter: textFilter(),
  text: 'Service Name'
},
{
  dataField: 'serviceId',
  text: 'Service Id'
}, 
{
  dataField: 'outBalance',
  text: 'Current Amount'
}
];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: '#9FBAA1'
  /*onSelect: (row, isSelect, rowIndex, e) => {
  }*/

};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    serviceId = row.serviceId,
    servicesName = row.servicesName,
    servicesAmount = row.outBalance
  }
};

class UserPayments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      payModal: false
    }
    this.openModal = this.openModal.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }
  
  openModal() {
    this.setState({
      payModal: !this.state.payModal
    })
  }


  async sendSubmit() {
    let accSelected = document.getElementById('accoSelect');
    let originAccount = accSelected.options[accSelected.selectedIndex].value;
    let userId = sessionStorage.getItem('userId')
    let Payment = {
      "origin": originAccount,
      "serviceId": serviceId,
      "userId": userId
    }
    await this.props.PayService(Payment)
  }

  render() {
    const {usPayments} = this.props
    const { allAc } = this.props
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-12 col-sm-12 table-responsive-md table-responsive-sm table-responsive-lg table-responsive-xs">
            <BootstrapTable
              id='mytable'
              classes="table-striped table-content"
              headerClasses='thead-light'
              bordered={bord}
              hover={hover}
              bootstrap4={boot}
              keyField='serviceId'
              data={usPayments}
              columns={columns}
              filter={filterFactory()}
              selectRow={selectRow}
              pagination={paginationFactory()}
              rowEvents={rowEvents}></BootstrapTable>
            <Button className='submit-User' color='primary' onClick={this.openModal}>Pay Service</Button>
          </div>
          <Modal isOpen={this.state.payModal} className={this.props.className}>
          <ModalHeader toggle={this.openModal}>Payment Form</ModalHeader>
          <ModalBody>
            <Form className='SA-header__modal'>
              <FormGroup row>
                <Label for="titleInput" md={4}>Service Id</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={serviceId} name="title" id="serviceId" placeholder="Destiny Account" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={4}>Service Name</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={servicesName} name="title" id="servicesName" placeholder="Account Owner" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="newContent" md={8}>Current Amount</Label>
                <Col md={12}>
                  <Input type="text" disabled='true' value={servicesAmount} name="title" id="servicesAmount" placeholder="Owner Social Number" />
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
              <ModalFooter>
                <Button color='primary' onClick={this.sendSubmit}>Submit</Button>
                <Button color='primary' onClick={this.openModal}>Close</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  payment: state.payment.userPayment,
  Accounts: state.accounts.Accounts
})

const mapDispatchToProps = (dispatch, allProps) => {
  return {
    PayService: async (value) => {
      await dispatch(PayService(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPayments);
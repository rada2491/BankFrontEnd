import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input,
  Button, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';

let boot, hover = true;
let bord = false

const data = [{
  'ServiceId': 'ICE',
  'outBalance': 2000
}
  
]

const columns = [{
  dataField: 'ServiceId',
  filter: textFilter(),
  text: 'Service Name'
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
  bgColor: '#9FBAA1',
  /*onSelect: (row, isSelect, rowIndex, e) => {
  }*/

};

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    //userId = row.socialNumber;
    //accoNumber = Math.floor((Math.random() * 100000000) + 1);
  }
};

class UserPayments extends Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }
  

  openModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
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
              keyField='ServiceId'
              data={data}
              columns={columns}
              filter={filterFactory()}
              selectRow={selectRow}
              pagination={paginationFactory()}
              rowEvents={rowEvents}></BootstrapTable>
            <Button className='submit-User' color='primary' onClick={this.openModal}>Add Account</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPayments;
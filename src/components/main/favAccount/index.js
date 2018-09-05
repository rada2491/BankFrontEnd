import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input,
  Button, ModalHeader, ModalBody, ModalFooter, Collapse
} from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';

let hover, boot = true
let bord = false;

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

class FavoriteAccountModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const users  = this.props.favAccount
    console.log(this.props.favAccount)
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
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

      </div>
    );
  }
}

export default FavoriteAccountModule;
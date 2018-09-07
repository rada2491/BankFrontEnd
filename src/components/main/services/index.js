import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Card, Button, CardTitle, CardText, Row, Col,
  Form, FormGroup, Label, Modal, Input,
  ModalHeader, ModalBody, ModalFooter, Collapse,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import DropdownList from 'react-widgets/lib/DropdownList'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import 'react-widgets/dist/css/react-widgets.css'
import './style.scss'

const afterSubmit = (result, dispatch) =>
  dispatch(reset('ordersTradesSearchForm'));

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
class ServiceForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      payModal: false
    };

    this.AddPModal = this.AddPModal.bind(this)
  }

  AddPModal() {
    this.setState({
      payModal: !this.state.payModal
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, mySubmit } = this.props;
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-8 payment-container">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}>Add Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}>Current Services
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="8">
                    <form onSubmit={handleSubmit}>
                      <div className="row payment-form">
                        <div className="input-group input-group-icon RB-register__container">
                          <label htmlFor="firstName">Service</label>
                          <Field className='input'
                            name="name"
                            component='input'
                            type="text" />
                        </div>
                        <div className="input-group input-group-icon RB-register__container">
                          <label htmlFor="text">Service Description</label>
                          <Field name="description"
                            component='input'
                            type="text" />
                        </div>
                        <div className='activeDrop'>
                          <label htmlFor="active">State</label>
                          <Field
                            name="active"
                            component="select">
                            <option></option>
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                          </Field>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary submit-User" disabled={submitting}>Submit</button>
                    </form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  {
                    this.props.allSer.map(allS => {
                      return (
                        <Col sm="6" key={allS.id}>
                          <Card body id={allS.id}>
                            <CardTitle>{allS.name}</CardTitle>
                            <CardText>{allS.description}</CardText>
                            <Button onClick={this.AddPModal}>Go somewhere</Button>
                          </Card>
                          <Modal isOpen={this.state.payModal} toggle={this.AddPModal} className={this.props.className}>
                            <ModalHeader toggle={this.AddPModal}>Assign Payment</ModalHeader>
                            <ModalBody>
                              <form onSubmit={mySubmit}>
                                <div className="row">
                                  <div className="input-group input-group-icon RB-register__container">
                                    <label htmlFor="text">Social Number</label>
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
                                  <button type="button" className="btn btn-primary" onClick={this.load}>Search Client</button>
                                  <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
                                </div>
                              </form>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="secondary" onClick={this.AddPModal}>Close</Button>
                            </ModalFooter>
                          </Modal>
                        </Col>
                      )
                    })
                  }
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>

      </div>
    );
  }
}

ServiceForm = reduxForm({
  form: 'service', // a unique name for this form
})(ServiceForm);

const selector = formValueSelector('service');

ServiceForm = connect(
  state => {
    const nameValue = selector(state, 'name')
    const desValue = selector(state, 'description')
    return ({
      nameValue,
      desValue
    })
  }
)(ServiceForm)

export default ServiceForm;

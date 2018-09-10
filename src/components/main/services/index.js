import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Card, Button, CardTitle, CardText, Row, Col,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Field, reduxForm, formValueSelector, reset, change } from 'redux-form';
import { connect } from 'react-redux';
import classnames from 'classnames';
import addPayment from '../../../redux/actionCreator/addPayment'
import PaymentForm from '../payment/'

import 'react-widgets/dist/css/react-widgets.css'
import './style.scss'



const afterSubmit = (result, dispatch) =>
  dispatch(reset('ordersTradesSearchForm'));



class ServiceForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      activeTab: '1',
      payModal: false,
      servic: this.props.allSer,
      modalPayS: false,
      modalPayF: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.AddPModal = this.AddPModal.bind(this)

  }

  AddPModal() {
    this.setState({
      payModal: !this.state.payModal
    })
  }

  componentWillMount() {
    /*this.setState({
      servic: this.props.allSer
    })*/
  }

  handleSubmit = async (values) => {
    await this.props.addPayment(values)
    if (this.props.payCode === 200) {
      this.setState({
        modalPayS: !this.state.modalPayS
      })
    }
    else {
      this.setState({
        modalPayF: !this.state.modalPayF
      })
    }
  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggle2() {
    this.setState({
      modalPayS: !this.state.modalPayS,
      payModal: !this.state.payModal
    });
  }

  toggle3() {
    this.setState({
      modalPayF: !this.state.modalPayF,
      payModal: !this.state.payModal
    });
  }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { servic } = this.state
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-12 payment-container">
            <Nav tabs>
              <NavItem className="textformat">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}>Add Service
                </NavLink>
              </NavItem>
              <NavItem className="textformat">
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
                      <div className="row payment-form ">
                        <div className="input-group input-group-icon RB-register__container ">
                          <label htmlFor="firstName" className=" textformat">Service</label>
                          <Field className='input form-control-lg borde'
                            name="name"
                            component='input'
                            type="text" />
                        </div>
                        <div className="input-group input-group-icon RB-register__container">
                          <label htmlFor="text" className="textformat">Service Description</label>
                          <Field className="input form-control-lg borde" name="description"
                            component='input'
                            type="text" />
                        </div>
                        <div className='activeDrop'>
                          <label htmlFor="exampleFormControlSelect1" className="textformat">State</label>
                          <Field className="borde"
                            name="active"
                            component="select">
                            <option></option>
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                          </Field>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary submit-User textFormat" disabled={submitting}>Submit</button>
                    </form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  {
                    this.props.allSer.map(allS => {
                      return (
                        <Col sm="4" key={allS.id} className='RB-service-card'>
                          <Card body id={allS.id}>
                            <CardTitle>{allS.name}</CardTitle>
                            <CardText>{allS.description}</CardText>
                          </Card>
                          <Modal isOpen={this.state.payModal} toggle={this.AddPModal} className={this.props.className}>
                            <ModalHeader toggle={this.AddPModal}>{allS.name}</ModalHeader>
                            <PaymentForm onSubmit={this.handleSubmit} />
                            <ModalFooter>
                              <Button color="secondary" onClick={this.AddPModal}>Close</Button>
                            </ModalFooter>
                          </Modal>
                        </Col>
                      )
                    })
                  }
                </Row>
                <Button onClick={this.AddPModal}>Assign Payment</Button>
              </TabPane>
            </TabContent>
            <Modal isOpen={this.state.modalPayS} toggle={this.toggle2} className={this.props.className}>
              <ModalHeader toggle={this.toggle2}>Payment created</ModalHeader>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle2}>Close</Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modalPayF} toggle={this.toggle3} className={this.props.className}>
              <ModalHeader toggle={this.toggle3}>Payment not created</ModalHeader>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle3}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pay: state.payment.payment,
  payCode: state.payment.code
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
    addPayment: async (values) => {
      await dispatch(addPayment(values))
    }
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
    const userSocial = selector(state, 'socialNumber')
    return ({
      nameValue,
      desValue,
      userSocial
    })
  }
)(ServiceForm)

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);

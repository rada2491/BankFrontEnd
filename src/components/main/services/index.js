import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Card, Button, CardTitle, CardText, Row, Col,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Field, reduxForm, formValueSelector, reset, change } from 'redux-form';
import { connect } from 'react-redux';
import classnames from 'classnames';
import usFound from '../../../redux/actionCreator/usFound'

import 'react-widgets/dist/css/react-widgets.css'
import './style.scss'

let usNumber

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
      payModal: false,
      servic: this.props.allSer
    };

    this.AddPModal = this.AddPModal.bind(this)
    this.load = this.load.bind(this)
  }

  AddPModal() {
    this.setState({
      payModal: !this.state.payModal
    })
  }

  componentWillMount() {
    console.log(this.props.allSer)
    /*this.setState({
      servic: this.props.allSer
    })*/
  }

  /*componentDidUpdate(prevProps) {
    console.log('fuck')
    if(this.props.allSer !== prevProps.allSer){
      console.log('fuck2')
      this.setState({
        servic: this.props.allSer 
      })
    }
  }*/

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  async load() {
    usNumber = this.props.userSocial
    let num = {
      'socialNumber': usNumber
    }
    await this.props.usFound(num)

    this.props.found(this.props.user.name)
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, mySubmit } = this.props;
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
                    servic.map(allS => {
                      return (
                        <Col sm="4" key={allS.id}>
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
                                    <label htmlFor="text" className="textformat">Social Number</label>
                                    <Field className='input'
                                      name="socialNumber"
                                      component={renderField}
                                      type="text" />
                                  </div>
                                  <div className="input-group input-group-icon RB-register__container">
                                    <label htmlFor="name" className="textformat">Client Name</label>
                                    <Field name="name"
                                      component={renderField}
                                      type="text" />
                                  </div>
                                  <div className='activeDrop2'>
                                    <label htmlFor="exampleFormControlSelect1" className="textformat">State</label>
                                    <Field className="borde"
                                      name="active"
                                      component="select">
                                      <option></option>
                                      <option value={true}>Active</option>
                                      <option value={false}>Inactive</option>
                                    </Field>
                                  </div>
                                  <div className="input-group input-group-icon RB-register__container">
                                    <label htmlFor="outBalance" className="textformat">Amount to pay</label>
                                    <Field name="outBalance"
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



const mapStateToProps = state => ({
  user: state.userFound.user
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
    usFound: async (values) => {
      await dispatch(usFound(values))
    },
    found: async (name) => {
      await dispatch(change('service', 'name', name))
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

import React, { Component } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Card, Button, CardTitle, CardText, Row, Col,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Field, reduxForm, formValueSelector, reset, change } from 'redux-form';
import { connect } from 'react-redux';
import usFound from '../../../redux/actionCreator/usFound'

let usNumber;
let fal = false;
let tru = true;

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

class PaymentForm extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      serId: this.props.serId
    })
    this.load = this.load.bind(this)
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
    const { handleSubmit, submitting } = this.props;
    const { allSer } = this.props
    return (
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group input-group-icon RB-register__container">
              <label htmlFor="ApplicationUserId" className="textformat">Social Number</label>
              <Field className='input'
                name="ApplicationUserId"
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
              <label htmlFor="ServiceId" className="textformat">Service</label>
              <Field className="borde"
                name="ServiceId"
                component="select">
                <option></option>
                {
                  allSer.map(ser => {
                    return (
                      <option value={ser.name}>{ser.name}</option>
                    )
                  })
                }
              </Field>
            </div>
            <div className='activeDrop2'>
              <label htmlFor="exampleFormControlSelect1" className="textformat">State</label>
              <Field className="borde"
                name="state"
                component="select">
                <option></option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </Field>
            </div>
            <div className='activeDrop2'>
              <label htmlFor="currency" className="textformat">Currency</label>
              <Field className="borde"
                name="currency"
                component="select">
                <option></option>
                <option value='Dollars'>Dollars</option>
                <option value='Colons'>Colons</option>
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
    );
  }
}


const mapStateToProps = state => ({
  user: state.userFound.user,
  allSer: state.service.AllSer
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
    usFound: async (values) => {
      await dispatch(usFound(values))
    },
    found: async (name) => {
      await dispatch(change('Payments', 'name', name))
    }
  }
}

PaymentForm = reduxForm({
  form: 'Payments', // a unique name for this form
})(PaymentForm);

const selector = formValueSelector('Payments');

PaymentForm = connect(
  state => {
    const userSocial = selector(state, 'ApplicationUserId')
    return ({
      userSocial
    })
  }
)(PaymentForm)

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);

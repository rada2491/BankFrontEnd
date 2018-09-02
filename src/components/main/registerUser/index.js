import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from './validate';
import { connect } from 'react-redux'
import DropdownList from 'react-widgets/lib/DropdownList'
import QRCode from 'qrcode-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.scss'

let namSele, idSele, emSele;

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
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

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {

    namSele = this.props.nameValue
    idSele = this.props.idValue
    emSele = this.props.emailValue

    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="firstName">User Name</label>
                  <Field className='input' 
                  name="name" 
                  component={renderField}
                  type="text"/>
                </div>
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="text">User Social Number</label>
                  <Field name="socialNumber" 
                  component={renderField}
                  type="text" />
                </div>
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="Phone">User Cell Phone</label>
                  <Field name="PhoneNumber" 
                  component={renderField}
                  type="Phone" />
                </div>
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="email">User Email</label>
                  <Field name="email" 
                  component={renderField}
                  type="email"/>
                </div>
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="Password">User Password</label>
                  <Field name="Password" 
                  component={renderField}
                  type="Password" />
                </div>
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="Password">Confirm Password</label>
                  <Field name="confirmPassword" 
                  component={renderField}
                  type="Password" />
                </div>
                <div className="input-group input-group-icon RB-register__container">
                  <label htmlFor="UserType">User Type</label>
                  <Field name="UserType" 
                  component={renderField}
                  type="text" />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
                <Button color="danger" className="btn btn-primary" onClick={this.toggle}>Create QR Code</Button>
              </div>
            </form>
          </div>
          <div className="col-md-4">

          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <QRCode className='teee' value={namSele + `${idSele}` + emSele} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact', // a unique name for this form
  validate,
})(ContactForm);

const selector = formValueSelector('contact');

ContactForm = connect(
  state => {
    const nameValue = selector(state, 'name')
    const idValue = selector(state, 'socialNumber')
    const emailValue = selector(state, 'email')
    return ({
      nameValue,
      idValue,
      emailValue
    })
  }
)(ContactForm)

export default ContactForm;
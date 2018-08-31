import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import QRCode from 'qrcode-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class ContactForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {

    let selecto = this.props.isAssignedValue
    console.log(selecto)


    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">User Name</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="text">User Social Number</label>
            <Field name="socialNumber" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="Phone">User Cell Phone</label>
            <Field name="PhoneNumber" component="input" type="Phone" />
          </div>
          <div>
            <label htmlFor="email">User Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="Password">User Password</label>
            <Field name="Password" component="input" type="Password" />
          </div>
          <div>
            <label htmlFor="UserType">User Type</label>
            <Field name="UserType" component="input" type="text" />
          </div>
          <button type="submit">Submit</button>
          <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        </form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <QRCode value="uidrhgnuidfhghuidnfguihdfgihdguidsnfgiudfhgnifnvbuisdfgjnkbuidgfhnbsidufbkjnzuidgfnbkcjbnsduifgnbsuifhknfiugnbifuhgndfuivdifubnsdfuibdfiunsdkjbnsdfjbnsdiufbsdfbinusdfb" />
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
  form: 'contact' // a unique name for this form
})(ContactForm);

const selector = formValueSelector('contact');

ContactForm = connect(
  state => {
    const isAssignedValue = selector(state, 'name')
    const freePeriodValue = selector(state, 'socialNumber')
    return ({
      
      isAssignedValue,
      freePeriodValue
    })
  }
)(ContactForm)

export default ContactForm;
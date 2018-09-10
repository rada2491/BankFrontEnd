import React from 'react';
import { connect } from 'react-redux'
import { Values } from "redux-form-website-template";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import createNewUser from '../../redux/actionCreator/createUser'
import RegisterUser from '../../components/main/registerUser/index'

class RegisterUserContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalF: false,
      createUser: []
    }
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2() {
    this.setState({
      modalF: !this.state.modalF
    });
  }

  handleSubmit = async (values) => {
   await this.props.createNewUser(values)
   if(this.props.code === 200){
     this.setState({
       modal: !this.state.modal
     })
   }
   else {
    this.setState({
      modalF: !this.state.modalF
    })
   }
  }

  render() {
    return (
      <div>
        <RegisterUser onSubmit={this.handleSubmit} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>User created</ModalHeader>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalF} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2}>User not created</ModalHeader>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle2}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  createUser: state.createUser.createUser,
  code: state.createUser.code
})

const mapDispatchToProps = (dispatch, whocares) => {
  return {
    createNewUser: async (values) => {
      await dispatch(createNewUser(values))
      dispatch(reset('contact'))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserContainer);
import React from 'react';
import { connect } from 'react-redux'
import { Values } from "redux-form-website-template";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import addService from '../../redux/actionCreator/addService'
import addPayment from '../../redux/actionCreator/addPayment'
import allServices from '../../redux/actionCreator/allServices'
import Service from '../../components/main/services/'

class CreateServiceContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalG: false,
      modalB: false,
      acti: "Active",
      deAct: "Inactive",
      services: [],
      resCode: 0
    }
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.props.allServices()
  }

  toggle() {
    this.setState({
      modalG: !this.state.modalG
    });
  }

  handleSubmit = async (values) => {
    await this.props.addService(values)
    if(this.props.resCode === 200){
      this.setState({
        modalG: true,
        services: this.props.services
      })
    } else {
      this.setState({
        modalB: true
      })
    }
  }

  mySubmit = async (values) => {
    await this.props.addPayment(values)
  }

  render() {
    const { services } = this.props
    return (
      <div>
        <Service onSubmit={this.handleSubmit} mySubmit={this.mySubmit} allSer={this.props.allSer}/>
        <Modal isOpen={this.state.modalG} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Service created</ModalHeader>
          <ModalBody>
            <p>Service name: {this.state.services.name}</p>
            <p>Service description: {this.state.services.description}</p>
            <p>Service state: {this.state.acti}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  services: state.service.createService,
  resCode: state.service.code,
  allSer: state.service.AllSer,
  pay: state.payment.payment,
  payCode: state.payment.code
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
  addService: async (values) => {
    await dispatch(addService(values))
  },
  allServices: async () => {
    await dispatch(allServices())
  },
  addPayment: async (values) => {
    await dispatch(addPayment(values))
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateServiceContainer);
import React from 'react';
import { connect } from 'react-redux'
import { Values } from "redux-form-website-template";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import addService from '../../redux/actionCreator/addService'

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
      resCode: 0,
      allServicesDB: [],
      allSer: []
    }
    this.toggle = this.toggle.bind(this);
  }

  async componentWillMount() {
    await this.props.allServices()
    this.setState({
      allSer: this.props.allSer
    })
  }

  componentDidMount() {
    this.setState({
      allSer: this.props.allSer
    })
  }

  toggle() {
    this.setState({
      modalG: !this.state.modalG
    });
  }

  handleSubmit = async (values) => {
    await this.props.addService(values)
    //await this.props.allServices()
    if (this.props.resCode === 200) {
      this.setState({
        modalG: true,
        services: this.props.services, //this is the new service
        //allServicesDB: this.props.allSer 
      })
    } else {
      this.setState({
        modalB: true
      })
    }
  }

  componentDidUpdate(preProps) {
    ('entre a upgradear las nalgas')
    if (this.props.allSer !== preProps.allSer) {
      this.setState({
        allSer: this.props.allSer
      })
    }
  }

  

  render() {
    const { services } = this.props
    const { allSer } = this.state
    //const { allSer } = this.state
    return (
      <div>
        <Service onSubmit={this.handleSubmit} allSer={allSer} />
        <Modal isOpen={this.state.modalG} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Service created</ModalHeader>
          <ModalBody>
            <p>Service name: {this.state.services.name}</p>
            <p>Service description: {this.state.services.description}</p>
            <p>Service state: {this.state.acti}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  services: state.service.createService,
  resCode: state.service.code,
  allSer: state.service.AllSer || [],
  pay: state.payment.payment,
  payCode: state.payment.code
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {

    allServices: async () => {
      await dispatch(allServices())
    },
    addService: async (values) => {
      await dispatch(addService(values))
    },

    addPayment: async (values) => {
      await dispatch(addPayment(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateServiceContainer);
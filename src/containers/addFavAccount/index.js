import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddFavAccount from '../../components/main/favAccount/'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AllFavAccount from '../../redux/actionCreator/allFavAccount'
import NewFavAccount from '../../redux/actionCreator/addFavAccount'

class AddFavAccountContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalG: false,
      modalB: false,
      favAccount: [],
      resCode: 0,
      newFavAccout: []
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modalG: !this.state.modalG
    });
  }

  handleSubmit = async (values) => {
    console.log('entre aqui')
    let newFavAcco = {
      'FavoriteAccountId': values.accountNumber,
      'ApplicationUserId': sessionStorage.getItem('userId')
    }

    await this.props.NewFavAccount(newFavAcco)
    console.log(this.props.resCode)
    if (this.props.resCode === 200) {
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

  async componentWillMount() {
    await this.props.AllFavAccount()

  }


  render() {
    const { favAccount } = this.props
    return (
      <div>
        <AddFavAccount favAccount={favAccount} onSubmit={this.handleSubmit} />
        <Modal isOpen={this.state.modalG} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Service created</ModalHeader>
          <ModalBody>
            <p>Favorite Account Added</p>
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

const mapStateToProps = state => ({
  favAccount: state.faAccount.FavAccount || [],
  resCode: state.faAccount.code
})

const mapDispatchToProps = (dispatch, allPro) => {
  return {
    AllFavAccount: async (values) => {
      await dispatch(AllFavAccount(values))
    },
    NewFavAccount: async (values) => {
      await dispatch(NewFavAccount(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavAccountContainer);
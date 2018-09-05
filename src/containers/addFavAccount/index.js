import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddFavAccount from '../../components/main/favAccount/'

import AllFavAccount from '../../redux/actionCreator/allFavAccount'

class AddFavAccountContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favAccount: [],
      resCode: 0
    }

  }

  async componentWillMount() {
    await this.props.AllFavAccount()

  }


  render() {
    const { favAccount } = this.props
    return (
      <AddFavAccount favAccount={favAccount} onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  favAccount: state.faAccount.FavAccount || [],
  //resCode: state.faAccount.code
})

const mapDispatchToProps = {
  AllFavAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavAccountContainer);
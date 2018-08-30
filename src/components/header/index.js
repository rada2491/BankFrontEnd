import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Modal, Col, Input, Button, Nav, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.scss';

import logo from './logo.png';

//import updateNews from '../../../redux/actionCreatos/updateNews'

var newTitle, newContent, newImage, newId;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }

    this.openModal = this.openModal.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }


  openModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  sendSubmit() {
    /* newId = this.props.items.length
     newTitle = document.getElementById('newTitle').value;
     newContent = document.getElementById('newContent').value;
     newImage = `../src/components/main/Cards/${document.getElementById('newImage').files[0].name}`;
 
     let addNew = {
       "id": newId.toString(), "title": newTitle, "content": newContent
       , "cardImage": newImage
     }
 
     this.props.updateNews(addNew)
     this.setState({
       modal: !this.state.modal
     })*/
  }

  render() {
    return (
      <header>
        <div className='container-fluid'>
          <div className="row SA-header">
            <div className="container col-md-8">
              <div className="row">
                <div className="col-md-1 col-sm-1 col-xs-1 SA-header__container">
                  <img className='SA-header__container-logo' src={logo} alt="" />
                </div>
                <div className="col-md-10 col-sm-10 col-xs-10">
                  <Nav className='SA-header__nav d-flex justify-content-end'>
                    <li><Link className="SA-header__nav-item" to='/'>Home</Link></li>
                    <li><a className="SA-header__nav-item" id='showLeftPushe' to='#'>Leagues</a></li>
                    <li><Link className="SA-header__nav-item" to='/albums'>Album</Link></li>
                    <li><a className="SA-header__nav-item" onClick={this.openModal}>Sing out</a></li>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  //items: state.news.news
})

const mapDispatchToProps = {
  //updateNews
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

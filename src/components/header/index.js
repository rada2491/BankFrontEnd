import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Form, FormGroup, Label, Modal, Col, Input, Button,
  Nav, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import './style.scss';

//import logo from './logo.png';

//import updateNews from '../../../redux/actionCreatos/updateNews'

var newTitle, newContent, newImage, newId;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    console.log('gsdf')
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
      <Nav className="navbar navbar-inverse sidebar" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <Link className="active"><a href="#">Home<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></Link> 
              <Link ><a href="#">Profile<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></Link> 
              <Link ><a href="#">Messages<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span></a></Link> 
              <Link className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Settings <span className="caret"></span><span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-cog"></span></a>
                <ul className="dropdown-menu forAnimate" role="menu">
                  <Link> <a href="#">Action</a></Link> 
                  <Link> <a href="#">Another action</a></Link> 
                  <Link> <a href="#">Something else here</a></Link> 
                  <Link className="divider"></Link> 
                  <Link> <a href="#">Separated link</a></Link> 
                  <Link className="divider"></Link> 
                  <Link> <a href="#">One more separated link</a></Link> 
                </ul>
              </Link> 
              <Link> <a href="#">Home<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></Link> 
              <Link ><a href="#">Profile<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></Link> 
              <Link ><a href="#">Messages<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-envelope"></span></a></Link> 
              <Link className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Settings <span className="caret"></span><span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-cog"></span></a>
                <ul className="dropdown-menu forAnimate" role="menu">
                  <Link> <a href="#">Action</a></Link> 
                  <Link> <a href="#">Another action</a></Link> 
                  <Link> <a href="#">Something else here</a></Link> 
                  <Link className="divider"></Link> 
                  <Link> <a href="#">Separated link</a></Link> 
                  <Link className="divider"></Link> 
                  <Link> <a href="#">One more separated link</a></Link> 
                </ul>
              </Link> 
            </ul>
          </div>
        </div>
      </Nav>
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

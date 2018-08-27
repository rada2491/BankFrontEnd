import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'

var user, password;

import loginCredentials from '../../../redux/actionCreator/loginCredentials'

class Example extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.sendSubmit = this.sendSubmit.bind(this);
  }

  sendSubmit() {
    user = document.getElementById('exampleEmail').value;
    password = document.getElementById('examplePassword').value;

    let addNew = {
      "email": user, 
      "password": password
    }

    this.props.loginCredentials(addNew)
    this.setState({
      modal: !this.state.modal
    })
  }
  
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input value="indira@gmail.com" type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input value="Abc123!" type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button onClick={this.sendSubmit}>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {
  loginCredentials
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
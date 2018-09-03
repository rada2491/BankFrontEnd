import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import classnames from 'classnames';

import 'react-widgets/dist/css/react-widgets.css'
import './style.scss'



const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className='container-fluid RB-register'>
        <div className="row">
          <div className="col-md-8 payment-container">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}>Add Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}>Current Services
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="8">
                    <form onSubmit={handleSubmit}>
                      <div className="row payment-form">
                        <div className="input-group input-group-icon RB-register__container">
                          <label htmlFor="firstName">Service</label>
                          <Field className='input'
                            name="name"
                            component='input'
                            type="text" />
                        </div>
                        <div className="input-group input-group-icon RB-register__container">
                          <label htmlFor="text">Service Description</label>
                          <Field name="description"
                            component='input'
                            type="text" />
                        </div>
                        <div className='activeDrop'>
                          <label>State</label>
                          <Field
                            name="active"
                            component={DropdownList}
                            data={['Active', 'Inactive']}
                            valueField="value"
                            textField="State" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
                    </form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>

      </div>
    );
  }
}

Payment = reduxForm({
  form: 'payment' // a unique name for this form

})(Payment);

export default Payment;

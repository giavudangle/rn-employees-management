import _ from 'lodash';
import Communications from 'react-native-communications';
import React from 'react';

import { Confirm, CardSection, Card, Button } from './common';

import EmployeeForm from './EmployeeForm';

import { connect } from 'react-redux';
import { employeeUpdate, employeeSave ,employeeDelete} from '../actions'


class EmployeeEdit extends React.Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    })
  }
  _onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })

  }
  _onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on => ${shift}`)
  }
  _onAccept(){
    const {uid}=this.props.employee;
    this.props.employeeDelete(uid);
  }
  _onDecline(){
    this.setState({
      showModal:false
    })
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this._onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={this._onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={()=>this.setState({showModal:!this.state.showModal})}>
            Fire Employee
          </Button>
        </CardSection>
        <CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this._onAccept.bind(this)}
            onDecline={this._onDecline.bind(this)}
          >
            Are you want to delete this ?
          </Confirm>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeSave, employeeUpdate,employeeDelete })(EmployeeEdit);
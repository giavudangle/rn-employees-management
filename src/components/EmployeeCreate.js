import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card';



import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

import EmployeeForm from './EmployeeForm';



class EmployeeCreate extends Component {
  _onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }


  render() {
    console.log(this.props.employee);
    return (
      <View>
        <EmployeeForm {...this.props} />
        <Card>


          <CardSection>
            <Button onPress={() => this._onButtonPress()}>
              Create
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
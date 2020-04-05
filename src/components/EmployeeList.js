import React, { Component } from 'react';
import { View, Text ,StyleSheet, ListView } from 'react-native';

import _ from 'lodash';

import { connect } from 'react-redux';
import {employeesFetch} from '../actions';
import { FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import ListItem from './ListItem';


class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeesFetch();
    
    
  }

  

  _renderEmployee = (employee) => {
    return(
      <ListItem employee={employee}/>
    );
  }

  render() {

      return (
        <View>
         <FlatList
          data={this.props.employees}
          renderItem={({item})=>this._renderEmployee(item)}
         />
        </View>
      );

  }
}



const mapStateToProps = (state) => {
  const employees = _.map(state.employees,(val,uid)=>{
    return {...val,uid};
    // Result: uid: val
    // -> uid: key/collection of model
    // -> val: val is the value of key/collection
    // => Result are : {shift:'Monday',name: 'GIAVU',phone:'0978892132'}
  });
  return {employees};
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
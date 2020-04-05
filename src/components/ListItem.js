import React from 'react';

import { Text, StyleSheet, View, Button } from 'react-native';
import { CardSection } from './common/CardSection';

import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {


  render() {
    const { name } = this.props.employee;
   
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle} >
          {name}
        </Text>
        <Button
          onPress={() => {
            Actions.employeeEdit({employee:this.props.employee});
          }}
          title="Press"
        />

      </View>

    );
  }


}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    paddingLeft: 10,
    margin: 5,

  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  }
});

export default ListItem;
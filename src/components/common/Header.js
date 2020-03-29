// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => {
  const { textStyle, viewStyle, viewLine } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <View style={viewLine}></View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'tomato',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    elevation: 4
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewLine: {
    height: 2,
    backgroundColor: 'tomato',
    width: 1000,
    marginTop: 10,
    borderRadius: 3,
  }
};


// Make the component available to the other parts of the app
export { Header };

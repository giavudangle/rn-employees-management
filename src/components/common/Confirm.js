import React from 'react';
import { Text, View, Modal,StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children,visible,onAccept,onDecline }) => {
  
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => { }}
    >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>YES</Button>
          <Button onPress={onDecline}>NO</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles=StyleSheet.create({
  cardSectionStyle:{
    justifyContent:'center'
  },
  textStyle:{
    flex:1,
    fontSize:18,
    textAlign:'center',
    lineHeight:40,
    color:'yellow',
    fontWeight:'bold'
  },
  containerStyle:{
    backgroundColor:'rgba(0,0,0,0.5)',
    position:'relative',
    flex:1,
    justifyContent:'center'
  }
});

export { Confirm };

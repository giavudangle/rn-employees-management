import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';

import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { Spinner } from './common/Spinner';


class LoginForm extends Component {
  _onEmailChange(text) {
    this.props.emailChanged(text);
  }
  _onPasswordChange(password) {
    this.props.passwordChanged(password);
  }
  _onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  _renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor:'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  _renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>
    }
    return (
      <Button onPress={this._onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  // If you dont bind in onChangeText => context is Global ( not your class base)
  // => So we get: Cannot read property of undefined
  // this in bind method is context of class.
  // Keep in mine.
  render() {
    const { container } = styles;
    return (<View style={container}>
      <Card>
        <CardSection>

          <Input
            label="Email"
            onChangeText={this._onEmailChange.bind(this)}
            value={this.props.email}
            placeholder="Type your email" />
        </CardSection>
          
        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="Type your password"
            onChangeText={this._onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this._renderError()}
        <CardSection>
          {this._renderButton()}
        </CardSection>
      
      </Card>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  errorTextStyle:{
    color:'red',
    fontSize:18,
    alignSelf:'center'
  }
});

const mapStateToProps = ({auth}) => {
  const {email,password,error,loading}=auth;
  return {email,password,error,loading};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {emailChanged,passwordChanged} from '../actions';

import {Card} from './common/Card';
import {CardSection} from './common/CardSection';
import {Input} from './common/Input';
import {Button} from './common/Button';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(password){
    this.props.passwordChanged(password);
  }

  render() {
    console.log(this.props);
    const {container} = styles;
    return (<View style={container}>
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            placeholder="Type your email"/>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="Type your password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

const mapStateToProps = state => {
  return {
    email:state.auth.email,
    password:state.auth.password
  }
};

export default connect(mapStateToProps, {emailChanged,passwordChanged})(LoginForm);

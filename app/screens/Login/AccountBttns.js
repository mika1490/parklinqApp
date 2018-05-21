import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class AccountBttns  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonSignUp}>
        <Text style={{ color: '#39c1ef' }}>Create an Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignIn}>
        <Text style={{ color: 'white' }}>Log In</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  buttonSignUp: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  },
  buttonSignIn: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    borderColor: `white`,
    borderWidth: 2,
    borderStyle: `solid`,
    borderRadius: 30
  },
  buttonText: {
    alignSelf: 'center',
    color: '#22a6b3'
  }
});
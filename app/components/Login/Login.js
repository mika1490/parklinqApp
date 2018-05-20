import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Splash  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
         placeholder="email"
         placeholderTextColor="rgba(255,255,255,0.6)"
         style={styles.input}
          />
        <TextInput
         placeholder="password"
         placeholderTextColor="rgba(255,255,255,0.6)"
         style={styles.input}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }, 
  input: {
    height: 40,
    width: 350,
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 0.1,
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  }
});
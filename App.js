/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from './app/screens/Splash';
import Login from './app/components/Login/Home';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

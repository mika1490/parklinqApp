import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainMap extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>map</Text>
       
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
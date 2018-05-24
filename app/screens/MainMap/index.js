import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
class MainMap extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  }; 
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

export default MainMap;
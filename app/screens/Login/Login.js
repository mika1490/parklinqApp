import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet, 
   TextInput, 
   TouchableOpacity } from 'react-native';

export default class Login  extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.socialLogin}>
          <Text style={{ color: '#39c1ef', fontSize:18 }}>Log in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.socialLogin}>
          <Text style={{ color: '#39c1ef', fontSize: 18 }}>Log in with Facebook</Text>
        </TouchableOpacity>
        <Text style={styles.textRegister}> ───────  Or  ───────</Text>  
        <View style={styles.inputSection}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='Email address'
            placeholderTextColor='white'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize={'none'}
            style={styles.input} />
        </View>
        <View style={styles.inputSection}>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder='Password'
          returnKeyType="go"
          placeholderTextColor='white'
          style={styles.input}
          secureTextEntry={true}
          ref={(input) => this.passwordInput = input} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{ color: '#39c1ef', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22a6b3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  socialLogin: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  }, 
  inputSection: {
    flexDirection: 'row',
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
  input: {
    height: 40,
    width: 350,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  textRegister:{
    color: 'white',
    margin: 25,
    fontSize: 25
  },
  button: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 45,
    margin: 10,
    width: 300,
    backgroundColor: `white`,
    borderStyle: `solid`,
    borderRadius: 30
  }
});
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MainMap from '../screens/MainMap';
import Account from '../screens/Account';
import PassesPage from '../screens/Passes';
import LoginHome from '../screens/Login/LoginHome';
import Login from '../screens/Login/Login';
import Registration from '../screens/Login/Registration';
import Terms from '../screens/Login/TermsConditions';

export const LoginStackNav = StackNavigator({
  LoginHome: {
    screen: LoginHome, 
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login, 
    navigationOptions: {
      header: null
    }
  },
  Registration: {
    screen: Registration, 
    navigationOptions: {
      header: null
    }
  },
  Terms: {
    screen: Terms,
    navigationOptions: {
      title: 'Terms & Conditions'
    }
  }
}) 

 export const Tabs = TabNavigator({
  Home: {
    screen: MainMap,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => <Icon name={ 'home' } size={35} style={{color: tintColor}} />
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'ACCOUNT',
      tabBarIcon: ({ tintColor }) => <Icon name={ 'account-circle' } size={35} style={{color: tintColor}} />
    }
  },
  PassesPage: {
    screen: PassesPage,
    navigationOptions: {
      tabBarLabel: 'PASSES',
      tabBarIcon: ({ tintColor }) => <Icon name={ 'account-circle' } size={35} style={{color: tintColor}} />
    }
  }
},{
  tabBarPosition: 'bottom'
});


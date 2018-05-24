import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainMap from '../screens/MainMap';
import Account from '../screens/Account';
import PassesPage from '../screens/Passes';
import LoginHome from '../screens/Login/LoginHome';
import Login from '../screens/Login/Login';
import Registration from '../screens/Login/Registration';
import Terms from '../screens/Login/TermsConditions';
import {Textarea} from 'native-base';
import SellParkingPage from '../screens/SellParking/index';
import HelpPage from '../screens/Help/index';
import Tabs from './tabRoute';



//INNER TAB NAVIGATOR

const InnerStackNav = new StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      // header: null
    }
  }
})

//DRAWER NAVIGATOR FOR HOME SCREEN
const DrawerNav = new DrawerNavigator({
  HomeScreen: {
    screen: InnerStackNav
  },
  SellParkingPage: {
    screen: SellParkingPage
  },
  HelpPage: {
    screen: HelpPage
  }
}, {
  drawerWidth: 300
})

//STACK NAVIGATOR FOR LOGIN TO HOME
export const LoginStackNav = new StackNavigator({
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
  },
  HomeScreen: {
    screen: DrawerNav,
    navigationOptions: {
      header: null
    }
  }
}, {
  navigationOptions: {
    gesturesEnabled: false
  }
}) 






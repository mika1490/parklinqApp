import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import AccountPage from './screens/Account';
import PassesPage from './screens/Passes/index';

//Tab navigator screens
import AccountPage from './screens/Account';
import PassesPage from './screens/Passes';
import Search from './screens/Search';

//Drawer navigator screens
import MainMap from './screens/MainMap';
import SellParking from './screens/SellParking';
import Help from './screens/Help';
import Login from './screens/Login/LoginHome';


//Tab navigator
export const Tabs = TabNavigator({
  Home: { screen: MainMap },
  Search: { screen: Search },
  AccountPage: { screen: AccountPage},
  PassesPage: { screen: PassesPage }
}, {
  order: [ 'Home', 'Search', 'AccountPage', 'PassesPage'],
  animationEnabled: true,
})

//Drawer Navigator
export const Drawer = DrawerNavigator({
  Home: { screen: MainMap },
  SellParking: { screen: SellParking },
  Help: { screen: Help },
  Logout: { screen: Login }
})
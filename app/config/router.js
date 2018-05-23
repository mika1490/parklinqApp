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


// TAB NAVIGATOR
class TabNav extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={{ padding: 10, flex: 1 }}>
          <Ionicons name="md-menu" onPress={() => navigation.navigate('DrawerOpen')} />
          <Button title="open says me" />
        </View>
      )
    }
  }
  render() {
    return(
      <Tabs />
    )
  }
}

 const Tabs = new TabNavigator({
  MainMap: {
    screen: MainMap,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({focused, tintColor }) => (
        <Ionicons name="md-compass" size={24} />
      ) 
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'ACCOUNT',
      tabBarIcon: () => (
        <Ionicons name="contact" size={24} />
      ) 
    }
  },
  PassesPage: {
    screen: PassesPage,
    navigationOptions: {
      tabBarLabel: 'PASSES',
      tabBarIcon: () => (
        <Ionicons name="md-compass" size={24} />
      ) 
    }
  },
},{
  tabBarPosition: 'bottom'
});

//INNER TAB NAVIGATOR

const InnerStackNav = new StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
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






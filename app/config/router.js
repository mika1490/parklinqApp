import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MainMap from '../screens/MainMap';
import Account from '../screens/Account';
import PassesPage from '../screens/Passes';

class OpenDrawer extends Component {
  componentWillMount() {
    this.props.navigation.navigate("DrawerOpen");
  }

  render() {
    return(
      <View>
        <Text>dummy view</Text>
      </View>
    )
  }
}



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

export const DrawerNav = DrawerNavigator({
  Home: {
    screen: MainMap,
    navigationOptions: {
      drawer: {
        label: 'Drawer 2'
      },
    },
  },
});
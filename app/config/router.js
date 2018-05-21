import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MainMap from '../screens/MainMap';
import Account from '../screens/Account';
import PassesPage from '../screens/Passes';

export const Tabs = createBottomTabNavigator({
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
      tabBarIcon: ({ tintColor }) => <Icon name={ 'account_circle' } size={35} style={{color: tintColor}} />
    }
  },
  PassesPage: {
    screen: PassesPage,
    navigationOptions: {
      tabBarLabel: 'PASSES',
      tabBarIcon: ({ tintColor }) => <Icon name={ 'account_circle' } size={35} style={{color: tintColor}} />
    }
  }
});
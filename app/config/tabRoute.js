import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text, Icon, Footer, FooterTab, Button } from 'native-base';

import MainMap from '../screens/MainMap';
import AccountPage from '../screens/Account';
import PassesPage from '../screens/Passes';

// TAB NAVIGATOR
// class TabNav extends Component {

//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerLeft: (
//         <View style={{ padding: 10, flex: 1 }}>
//           <Ionicons name="md-menu" onPress={() => navigation.navigate('DrawerOpen')} />
//           <Button title="open says me" />
//         </View>
//       )
//     }
//   }
//   render() {
//     return(
//       <Tabs />
//     )
//   }
// }

//  export const Tabs = new TabNavigator({
//   MainMap: {
//     screen: MainMap,
//     navigationOptions: {
//       tabBarLabel: 'HOME',
//       tabBarIcon: ({focused, tintColor }) => (
//         <Ionicons name="md-compass" size={24} />
//       ) 
//     }
//   },
//   Account: {
//     screen: Account,
//     navigationOptions: {
//       tabBarLabel: 'ACCOUNT',
//       tabBarIcon: () => (
//         <Ionicons name="contact" size={24} />
//       ) 
//     }
//   },
//   PassesPage: {
//     screen: PassesPage,
//     navigationOptions: {
//       tabBarLabel: 'PASSES',
//       tabBarIcon: () => (
//         <Ionicons name="md-compass" size={24} />
//       ) 
//     }
//   },
// },{
//   tabBarPosition: 'bottom'
// });

export default (Tabs = TabNavigator({
  MainMap: {screen: MainMap},
  AccountPage: { screen: AccountPage },
  PassesPage: { screen: PassesPage }
  },{
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("MainMap")}>
              <Icon name="home" />
              <Text>HOME</Text>
          </Button>
          <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("AccountPage")}>
              <Icon name="briefcase" />
              <Text>Account</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("PassesPage")}>
              <Icon name="headset" />
              <Text>Passes</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    } 
  }
));
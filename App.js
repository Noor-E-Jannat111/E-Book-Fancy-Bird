import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  ProfileScreen, 
  MessageScreen,
  ActivityScreen,
  ListScreen,
} from './screens';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  },
  MessageScreen: {
    screen: MessageScreen
  },
  ActivityScreen: {
    screen: ActivityScreen
  },
  ListScreen: {
    screen: ListScreen
  },
  // {
  //   drawerWidth: Dimensions.get("window").width *0.85,
  //   hideStatusBar: true,

  //   contentOptions: {
  //     activeBackgroundColor: "rgba(212,118,207,0.2)",
  //   }
  // }
});

export default createAppContainer(DrawerNavigator);
import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import LandingPage from '../screens/LandingPage';
import Login from '../screens/Login';

export default createMaterialBottomTabNavigator(
  {
    Home: { screen: LandingPage },
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Home',
    order: ['Login', 'Home'],
  }
);

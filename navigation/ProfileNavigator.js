import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchNotSafe from '../screens/SearchNotSafe';
import SearchSafe from '../screens/SearchSafe';
const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name="Profile" component={SearchSafe} />
      <Stack.Screen name="Test" component={SearchNotSafe} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;

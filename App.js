import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Splash from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import TabBarProvider from './contexts/TabBarProvider';
export default function App() {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TabBarProvider>
  );
}

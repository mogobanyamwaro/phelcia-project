import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LandingPage from './screens/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import TabBarProvider from './contexts/TabBarProvider';
import BottomTab from './navigation/bottomTabNavigator';
import ProfileNavigator from './navigation/ProfileNavigator';
export default function App() {
  return (
    // <TabBarProvider>
    //   <NavigationContainer>
    //     <TabNavigator />
    //   </NavigationContainer>
    // </TabBarProvider>
    <>
      <NavigationContainer>
        <ProfileNavigator />
      </NavigationContainer>
    </>
  );
}

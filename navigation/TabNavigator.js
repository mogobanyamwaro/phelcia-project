import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import GetStarted from '../screens/GetStarted';
import LandingPage from '../screens/LandingPage';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={LandingPage}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name="Create"
        component={Login}
        initialParams={{ icon: 'plus' }}
      />
      <Tab.Screen
        name="Profile"
        component={GetStarted}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

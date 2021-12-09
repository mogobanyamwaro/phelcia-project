import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import GetStarted from '../screens/GetStarted';
import TabBar from '../components/TabBar';
import Splash from '../screens/Splash';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Splash"
        component={Splash}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name="Getstart"
        component={GetStarted}
        initialParams={{ icon: 'plus' }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

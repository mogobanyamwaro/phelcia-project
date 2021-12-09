import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
const Tab = createBottomTabNavigator();
import LandingPage from '../screens/LandingPage';
import Feedback from '../screens/Feedback';

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingPage} />
      <Tab.Screen name="Feedback" component={Feedback} />
    </Tab.Navigator>
  );
}
export default BottomTab;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from '../screens/LandingPage';
import Feedback from '../screens/Feedback';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../components/styles';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#ffbd7d',
        activeTintColor: '#e47911',
      }}
    >
      <Tab.Screen
        component={LandingPage}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={Colors.buttonColor} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={Feedback}
        name="Feedback"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" color={Colors.buttonColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

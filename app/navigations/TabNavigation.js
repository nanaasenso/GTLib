import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../../app/screens/HomeScreen.js';
import ChatScreen from '../../app/screens/ChatScreen.js';
import UserAccountScreen from '../screens/UserAccountScreen.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation.js';
import ProfileScreenNavigation from './ProfileScreenNavigation.js';
import ChatScreenNavigation from './ChatScreenNavigation.js';
import Colors from '../utils/Colors.js';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarLabelStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="chat"
        component={ChatScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;

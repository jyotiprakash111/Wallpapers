import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingScreen from '../hoc/Counter';
import Home2 from '../screens/home';
import Flatlist from '../screens/flatList';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home2} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={SettingScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
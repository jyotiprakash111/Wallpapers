import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingScreen from '../hoc/Counter';
import Home2 from '../screens/home';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {
                //     let iconName;

                //     if (route.name === 'Home') {
                //         iconName = focused
                //             ? (<Image style={styles.icon} source={require("../assets/Images/icons/user.png")} />)
                //             : (<Image style={styles.icon} source={require("../assets/Images/icons/settings.png")} />)
                //     } else if (route.name === 'Settings') {
                //         iconName = focused ? <Image style={styles.icon} source={require("../assets/Images/icons/settings.png")} /> : <Image style={styles.icon} source={require("../assets/Images/icons/user.png")} />;
                //     }

                //     // You can return any component that you like here!
                //     return <Image source={require("../assets/Images/icons/home.svg")} />;
                // },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home2}/>
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
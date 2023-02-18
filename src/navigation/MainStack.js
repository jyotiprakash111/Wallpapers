import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Receipe from '../screens/receipe';
import ReceipeDetails from '../screens/receipeDetails';
import Products from '../screens/products';
import NewStyesheet from '../screens/demoStyle';
import Searchbar from '../screens/searchbar';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Searchbar">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} 

           options ={{ title: "Products", headerStyle: {
            backgroundColor: '#0C6BF2',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View />
          ),
        }} />
        <Stack.Screen name="Receipe" component={Receipe} 
        options={({ route }) => ({ title: route.params.name, headerBackTitleVisible: false  })}
        />
        <Stack.Screen name="ReceipeDetails" component={ReceipeDetails}  options={({ route }) => ({ title: route.params.name , headerBackTitleVisible: false })}
        />
        <Stack.Screen name="Searchbar" component={Searchbar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AwesomeBtn from '../components/awesomeBtn';
import DemoScrn from '../screens/demo';
import TabScreen from '../screens/Tab';
import AnimatedMenu from '../screens/animatedMenu'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tab'>
        <Stack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DemoScrn" component={DemoScrn} />
        {/* <Stack.Screen name="Awesomebtn" component={AwesomeBtn} />
        <Stack.Screen name="AnimatedMenu" component={AnimatedMenu} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
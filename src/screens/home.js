
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IosActionSheet from '../components/actionSheetIOS';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <IosActionSheet /> */}
      <TouchableOpacity onPress={()=> navigation.navigate("AnimatedMenu")}>

        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}
export default HomeScreen;
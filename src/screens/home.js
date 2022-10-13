
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IosActionSheet from '../components/actionSheetIOS';
import TextFontScalling from '../components/pixelratio';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <IosActionSheet /> */}
      <TouchableOpacity onPress={()=> navigation.navigate("AnimatedMenu")}>
        <TextFontScalling>
          Hello
        </TextFontScalling>
        {/* <Text>heelo</Text>d */}
      </TouchableOpacity>
    </View>
  );
}
export default HomeScreen;
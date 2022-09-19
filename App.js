import React from 'react';
import {View} from 'react-native';

import MainStack from './src/stackdemo';
import Tabs from './src/tab';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tabs />
    </View>
  )
}
export default App;

import React from 'react';
import {View} from 'react-native';

import MainStack from './src/stackdemo';
// import Tabs from './src/tab';
import Tabs from './src/navigation/MainStack';

import EYTask from './src/EY/parentsCharts';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <MainStack />
    </View>
  )
}
export default App;

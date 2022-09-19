import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, 
  TouchableWithoutFeedback,
  Animated, } from 'react-native';
// import Constants from 'expo-constants';


const Hamburger = () => {
  const [activated, setActivated] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [rotation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    const toValue = activated ? 0 : 1;

    Animated.parallel([
      Animated.timing(animation, {
        toValue,
        duration: 300,
        delay: 2000,
        useNativeDriver: false,
      }),
      Animated.spring(rotation, {
        toValue,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -5.0],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    },
    upper: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 6.0],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-45deg'],
          }),
        },
      ],
    },
    middle: {
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1.2, 0],
      }),
    },
    burgerButton: {
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', 'transparent'],
      }),
    },
  };

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View
          style={[style.burgerButton, animatedStyles.burgerButton]}>
          <Animated.View style={[style.inner, animatedStyles.upper]} />
          <Animated.View style={[style.middle, animatedStyles.middle]} />
          <Animated.View style={[style.inner, animatedStyles.lower]} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

let style = StyleSheet.create({
  burgerButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
    height: 50,
    paddingVertical: 20,
  },
  inner: {
    width: 22,
    height: 1.1,
    marginBottom: 5,
    backgroundColor: 'black',
  },
  middle: {
    width: 10,
    height: 0.1,
    marginLeft: -12,
    marginBottom: 5,
    backgroundColor: 'black',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Hamburger />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    paddingTop: 24,
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent:"center",
    alignItems:"center"
  },
  paragraph: {
    margin: 24, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
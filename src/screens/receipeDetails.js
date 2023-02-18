import React, { useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import Header from '../components/Header/Header';

const ReceipeDetails = ({ route: { params } }) => {
  const [isLoading, setIsLoading] = useState(false);

  let { data } = params;
  let { data2 } = params
  const deviceWidth = Dimensions.get('window').width;


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#3f6c89', height: 250 }}>
          <View
            style={{ flexDirection: 'row', height: 150, width: '70%' }}>
            <Image
              source={{ uri: data ? data.strMealThumb : data2.thumbnail }}
              style={{
                height: deviceWidth * 0.7,
                width: deviceWidth * 1
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: '5%' }}>
          <Text style={{ fontWeight: '900', fontSize: 20, marginTop: 10, marginBottom: 10 }}>
            {data ? "Steps:-" : "Description"}
          </Text>
          <Text style={{ fontWeight: '900', fontSize: 15 }}>
            {data? data.strInstructions:data2.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default ReceipeDetails;

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: '40%',
    borderRadius: 30,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Txt: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    height: 30,
    width: 100,
  },
});
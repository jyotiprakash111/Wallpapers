import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/header';


const ReceipeDetails = ({navigation, route: {params}}) => {
  let {data} = params;
  // alert(JSON.stringify(data))
  return (
    <View style={{flex: 1}}>
      <Header
        title="Movies"
        BackImg={require('../assets/back.png')}
        img={require('../assets/logout.png')}
      />
      <View style={{backgroundColor: '#3f6c89', height: 250}}>
        <View
          style={{flexDirection: 'row', height: 150, width: '70%', margin: 20}}>
          <Image
            source={{uri: data.image}}
            style={{height: '100%', width: '40%'}}
          />
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              textAlign: 'center',
              marginHorizontal: '15%',
            }}>
            {data.title}
            {'\n'}R | 3h 7min | 30 Dec 2021 Reviews: 10(Critics) 2345 (Users)
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 40, marginRight: 10}}>
          <TouchableOpacity activeOpacity={0.9} style={styles.btn}>
            <Text style={{color: '#3f6c89', fontWeight: '800'}}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20, marginHorizontal: '5%'}}>
        <Text style={{fontWeight: '900', fontSize: 20, marginBottom: 10}}>
          Synopsis
        </Text>
        <Text style={{fontWeight: '900', fontSize: 15}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
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
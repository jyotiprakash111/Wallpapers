import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    const boot = () => {
        setTimeout(() => {
            navigation.navigate('Receipe');
        }, 2000);
    };

    useEffect(() => {
        boot()
    })

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View
                style={{
                    backgroundColor: "#0C6BF2",
                    height: '100%',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                }}>
                <View style={{ marginTop: '40%' }}>
                    <Image
                        source={require('../assets/Images/food.jpg')}
                        style={{ height: 100, width: 100, borderRadius:50}}
                    />
                </View>
                <Text style={{ fontSize: 20, color: '#fff', marginTop:10}}>Find Your Receipes</Text>
                <View style={{ marginTop: '45%' }}>
                    <Image
                        style={{ height: 50, width: 90, resizeMode: 'contain' }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Splash;
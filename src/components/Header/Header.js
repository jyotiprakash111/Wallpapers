import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    NavigationContainer,
    DrawerActions,
    useNavigation,
} from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.Header}>
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Image
                    source={props.BackImg}
                    style={{ height: 15, width: 20, alignSelf: 'center', marginLeft: 10 }}
                />
            </TouchableOpacity>
            <Text style={styles.TxtStyle}>{props.title}</Text>
            <Image
                source={props.img}
                style={{ height: 20, width: 20, alignSelf: 'center' }}
            />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    Header: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0C6BF2',
        height: 50,
        width: '100%',
        flexDirection: 'row',
    },
    TxtStyle: {
        color: '#fff',
        fontSize: 16,
        marginLeft: '35%',
    },
});
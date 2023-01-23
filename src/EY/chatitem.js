import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, Alert, ShadowPropTypesIOS } from 'react-native';

const ChatItem = ({ title, id, image, nick }) => {
    console.log("propsssss", title)
    return (

        <View>
            <View style={styles.item}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.txt}>{id}</Text>
                <Text style={styles.txt}>{nick}</Text>
                <Text>{title}</Text>
            </View>
        </View>
    )
}
export default ChatItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "#ffffff",
        marginHorizontal: 10,
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
    },
    cardWrapper: {
        width: 100,
        height: 60,
        borderBottomColor: "red",
        borderRadius: 20,
        // ShadowPropTypesIOS:""
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor:'red',
        borderWidth:2,
    },
    txt: {
        fontSize: 20
    }
})
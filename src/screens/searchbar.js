import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';

const App = () => {
    const [filteredData, setfilteredData] = useState([]);
    const [masterData, setmasteredData] = useState([]);
    const [search, setsearch] = useState("")

    useEffect(() => {
        fetchPosts();
        return () => { }
    }, [])

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL).then((response) => response.json())
            .then((responsejosn) => {
                setfilteredData(responsejosn)
                // alert(JSON.stringify(responsejosn))
                setmasteredData(responsejosn)
            }).catch((err) => {
                console.log(err)
            })
    }

    const searchFilter = (text) => {
        if(text){
        const newData = masterData.filter((item)=>{
            const itemData = item.title ? item.title.toUpperCase()
            : "".toUpperCase()
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        setfilteredData(newData);
        setsearch(text);
        }else {
            setfilteredData(masterData)
            setsearch(text)
        }
    }
    const itemView = ({ item }) => {
        return (
            <Text style={styles.itemStyle}>
                {item.id} {item.title.toUpperCase()}
            </Text>
        )
    }
    const itemseparatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
            />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput 
                placeholder='Search here'
                style={styles.textInputStyle}
                value={search}
                onChangeText={(text)=> searchFilter(text)}
                />
                <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={itemseparatorView}
                    renderItem={itemView}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    itemStyle: {
        padding: 10
    },
    textInputStyle:{
        height:40,
        margin:5,
        paddingLeft:20,
        borderWidth:1,
        borderColor:"#000000",
        borderRadius:10
    }
})


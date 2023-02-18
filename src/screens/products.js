
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header/Header';
// import filter from 'lodash.filter';
import axios from 'axios';

const App = () => {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://dummyjson.com/products')
            // .then((res) => res.json())
            .then((data) => {
                // alert(JSON.stringify(data.data.products))
                setDataSource(data.data.products);
                console.log(data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                    Error fetching data... Check your network connection!
                </Text>
            </View>
        );
    }


    // const handleSearch = text => {
    //     const formattedQuery = text.toLowerCase();
    //     const filteredData = filter(fullData, user => {
    //         return contains(user, formattedQuery);
    //     });
    //     setData(filteredData);
    //     setQuery(text);
    // };

    // const contains = ({ strMeal, strCategory }, query) => {
    //     const { strInstructions, idMeal } = strMeal;

    //     if (strInstructions.includes(query) || idMeal.includes(query) || strCategory.includes(query)) {
    //         return true;
    //     }
    //     return false;
    // };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search'
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    // onChangeText={queryText => }
                    style={styles.searchbarStyle} />
            </View>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <View style={styles.wrapper}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('ReceipeDetails', { data2: item })
                            }
                            style={styles.imageContainer}>
                           <Image
                                source={{ uri: item.thumbnail }}
                                style={styles.imageStyle}
                            />
                            <Text style={{ textAlign: "center" }}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                //Setting the number of column
                maxToRenderPerBatch={10}
                initialNumToRender={10}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#2c3e50"
    },
    wrapper: {
        flex: 1, flexDirection: 'row', marginTop: 10,
        borderRadius:5
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    imageContainer: {
        height: 170,
        width: '85%',
        marginHorizontal: '6%',
        backgroundColor: "white",
        borderRadius: 10
    },
    imageStyle: {
        height: '80%',
        width: '100%',
        borderTopRightRadius: 5,
        borderTopLeftRadius:5,
    },
    searchContainer: {
        height: 150,
        width: "90%",
        marginHorizontal: 20,
        paddingTop: 30
    },
    searchbarStyle: {
        backgroundColor: "white",
        height: '50%',
        width: '100%',
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 10
    }
});
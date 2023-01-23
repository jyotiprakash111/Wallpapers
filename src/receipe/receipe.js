
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Slider from '../screen/slider';
// import Header from '../components/header';

const App = () => {
    const [dataSource, setDataSource] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
            .then((res) => res.json())
            .then((data) => {
                setDataSource(data.meals);
                // alert(JSON.stringify(data))
                console.log(data);
            })
            .catch(console.log);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {/* <Header
        title="Movies"
        BackImg={require('../assets/menu.png')}
        img={require('../assets/search.png')}
      /> */}

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ height: 200, backgroundColor: '#3f6c89' }}>
                    {/* <Slider /> */}
                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
                            Now Showing
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, backgroundColor: '#3f6c89' }}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                               
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('Moviedetails', { data: item })
                                    }
                                    style={{
                                        height: 170,
                                        width: '85%',
                                        marginHorizontal: '6%',
                                    }}>
                                    <Image
                                        source={{ uri: item.strMealThumb }}
                                        style={{
                                            height: '80%',
                                            width: '100%',
                                            borderRadius: 5,
                                        }}
                                    />
                                    <Text style={{textAlign:"center"}}>{item.strMeal}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </ScrollView>
        </View>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});
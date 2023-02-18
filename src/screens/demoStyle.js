// 
import React from 'react';
import { View, StyleSheet, Text } from "react-native";

function DemoStyleSheet(props) {
    return (
        // <View style={container}>
        //     <Text style={text}>
        //         Hello new Stylesheet
        //     </Text>
        // </View>

        // <View style={styles.container}>
        //     <View style={styles.box1}>
        //         <Text style={styles.text}>1</Text>
        //     </View>
        //     <View style={[styles.box2, StyleSheet.absoluteFill]}>
        //         <Text style={styles.text}>2</Text>
        //     </View>
        //     <View style={styles.box3}>
        //         <Text style={styles.text}>3</Text>
        //     </View>
        // </View>

        // hairline
        <View style={hairLine.container}>
            <Text style={hairLine.row}>React</Text>
            <Text style={hairLine.row}>Native</Text>
        </View>


    );
}

export default DemoStyleSheet;

// New Stylesheet Architecture


const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        color: '#000',
    },
});

const lists = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#61dafb',
    },
    listItem: {
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
    box3: {
        position: 'absolute',
        top: 120,
        left: 120,
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
    text: {
        color: '#FFF',
        fontSize: 80,
    },
});


const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);


const hairLine = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
    },
    row: {
        padding: 5,
        marginBottom: 2,
        borderBottomColor: 'pink',
        // borderColor: "red",
        borderWidth: 2,
          borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 2,
        borderBottomWidth: 10,
    },
});
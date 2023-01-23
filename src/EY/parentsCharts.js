import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ExampleJson from './example.json';
import ChatItemComp from './chatitem';

const ParentComp = () => {
    
  const renderItem = ({ item }) => (
    <ChatItemComp 
    title={item.title} 
    id={item.id} 
    image={item.image} 
    nick={item.nick} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ExampleJson}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ParentComp;
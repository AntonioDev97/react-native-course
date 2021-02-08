import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26}}>FlatList</Text>
      <FlatList 
        data={data}
        renderItem={(element) => {
          return <Text style={styles.item}>{element.item.name}</Text>
        }}
      />

      <Text style={{fontSize: 26, paddingTop: 20}}>SectionList</Text>
      <SectionList 
        sections={[{
          title: 'Grupo 1',
          data: [
            { key: 1, name: 'nicolas' },
            { key: 2, name: 'dragon folfy' },
            { key: 3, name: 'pelusa' },
            { key: 4, name: 'iris' },
            { key: 5, name: 'mica' }
          ]
        },{
          title: 'Grupo 2',
          data: [
            { key: 6, name: 'nicolas' },
            { key: 7, name: 'dragon folfy' },
            { key: 8, name: 'pelusa' },
            { key: 9, name: 'iris' },
            { key: 10, name: 'mica' },
          ]
        },{
          title: 'Grupo 3',
          data: [
            { key: 11, name: 'nicolas' },
            { key: 12, name: 'dragon folfy' },
            { key: 13, name: 'pelusa' },
            { key: 14, name: 'iris' },
            { key: 15, name: 'mica' },
          ]
        }]}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.section}>{section.title}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2
  }
});

const data = [
  { key: 1, name: 'nicolas' },
  { key: 2, name: 'dragon folfy' },
  { key: 3, name: 'pelusa' },
  { key: 4, name: 'iris' },
  { key: 5, name: 'mica' },
  { key: 6, name: 'nicolas' },
  { key: 7, name: 'dragon folfy' },
  { key: 8, name: 'pelusa' },
  { key: 9, name: 'iris' },
  { key: 10, name: 'mica' },
  { key: 11, name: 'nicolas' },
  { key: 12, name: 'dragon folfy' },
  { key: 13, name: 'pelusa' },
  { key: 14, name: 'iris' },
  { key: 15, name: 'mica' },
  { key: 16, name: 'nicolas' },
  { key: 17, name: 'dragon folfy' },
  { key: 18, name: 'pelusa' },
  { key: 19, name: 'iris' },
  { key: 20, name: 'mica' },
]

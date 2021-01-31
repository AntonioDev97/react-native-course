import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default function App() {
  const [text, setText] = useState('default')
  return (
    <View style={styles.container}>
      <Text>Texto: {text}</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Escribe aca'
        onChangeText={txt => setText(txt)}
        defaultValue={text}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width,
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  const {style} = props;
  const [texto, setTexto] = useState("Hola Mundo!")
  const actualizaTexto = () => setTexto("Chao Mundo!")
  return (
    <Text style={[styles.texto, style]} onPress={ actualizaTexto }>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}/>
      <Texto style={styles.green}/>
      <Texto style={styles.blue}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  texto: {
    color: 'white',
    fontSize: 24,
    height: 100,
    width: 100,
  },
  red: {
    // flex: 1,
    backgroundColor: 'red',
  },
  green: {
    // flex: 2,
    backgroundColor: 'green',
  },
  blue: {
    // flex: 3,
    backgroundColor: 'blue',
  }
}); 
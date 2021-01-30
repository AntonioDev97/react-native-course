import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = () => {
  const [texto, setTexto] = useState("Hola Mundo!")
  const actualizaTexto = () => setTexto("Chao Mundo!")
  return (
    <Text style={ styles.texto } onPress={ actualizaTexto }>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
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
  texto: {
    color: 'red',
    fontSize: 24
  }
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.photo}
        source={require('./assets/favicon.png')}
      />

      <Image 
        style={styles.photo}
        source={{uri: 'https://i.redd.it/ns1tr5zdgtp21.jpg'}}
      />

      <ImageBackground 
        style={styles.photo}
        source={{uri: 'https://hipertextual.com/files/2017/03/color-degradado-fondos-degradados-multicolor-51200.jpg'}}
      >
        <Text>Hola!</Text>
      </ImageBackground>
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
  photo: {
    height: 200,
    width: 200,
  }
});

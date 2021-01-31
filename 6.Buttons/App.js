import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Dimensions, 
  Button, 
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

const width = Dimensions.get('window').width;

export default function App() {
  const [text, setText] = useState('default')
  const [submit, setSubmit] = useState('')

  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Escribe aca'
        onChangeText={txt => setText(txt)}
        defaultValue={text}
      />

      {/* Normal button */}
      <Button onPress={() => {
        setSubmit(text)
        alert('Texto enviado con exito')
      }} title="Aceptar" />

      {/* Free design button */}
      <TouchableHighlight
        underlayColor={'#999'}
        activeOpacity={0.2}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con exito')
        }} title="Aceptar" 
      >
        <Text>Aceptar</Text>
      </TouchableHighlight>
      
      {/* Button with animation click */}
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#00f', true)}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con exito')
        }} title="Aceptar" 
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableNativeFeedback>

      {/* Button with opacity click */}
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con exito')
        }} title="Aceptar" 
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableOpacity>

      {/* Button do nothing when click on it */}
      <TouchableWithoutFeedback
        style={styles.TouchableOpacity}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con exito')
        }} title="Aceptar" 
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableWithoutFeedback>
      
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
  view: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TouchableOpacity: {
    backgroundColor: '#eee'
  }
});

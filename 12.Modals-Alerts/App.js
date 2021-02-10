import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button, Alert } from 'react-native';

const newAlert = () => {
  return Alert.alert(
    'Title Alert', 
    'Message Alert Content', 
    [{
      text: 'Cancel',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Aceptar',
      onPress: () => console.log('Button pressed'),
    }],
    { cancelable: false }
  )
};

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>New Modal</Text>
            <Button title="Close Modal" onPress={() => setModal(!modal)}/>
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setModal(!modal)}/>
      <View style={{margin: 20}}>
        <Button  title="Open Alert" onPress={newAlert}/>
      </View>
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
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  content: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },
});

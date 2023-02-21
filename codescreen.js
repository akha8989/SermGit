import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Input, KeyboardAvoidingView, ScrollView } from 'react-native';


export default function App() {


  const [percentGas, setPercentGas] = useState('')

  const [total, setTotal] = useState('');

  const addThemTogether = () => setTotal(+percentGas * 4500 * 4 / 100);

  const date = +new Date();

  return (




    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >



      <View style={styles.InputcontainerGas}>

        <Text> นำ้แก๊ส :  {total} KG</Text>
        <TextInput
          placeholder="%Gas"
          value={percentGas}
          onChangeText={Number => setPercentGas(Number)}
          style={styles.inputGas}
          clearButtonMode='always'
        />
      </View>

      <TouchableOpacity
        onPress={addThemTogether}
        style={styles.button}
      >
        <Text style={styles.buttonText}>ใส่ % นำ้แก็ส</Text>

      </TouchableOpacity>



      <TouchableOpacity
        style={styles.buttonOut}
      >
        <Text style={styles.buttonTextOut}>Logout</Text>

      </TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>


    </KeyboardAvoidingView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: '16',

  },
  buttonOut: {
    backgroundColor: '#0788F9',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 400,

  },
  buttonTextOut: {
    color: 'white',
    fontWeight: '700',
    fontSize: '16',
  },

  inputGas: {
    backgroundColor: '#33E0FF',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 1,

  },
  InputcontainerGas: {
    width: '50%'
  },

})






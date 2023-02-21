import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { authentication } from './firebase-config'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        authentication.signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }


    const [percentGas, setPercentGas] = useState('')
    const [total, setTotal] = useState('');   
    const addThemTogether = () => setTotal(+percentGas * 4500 * 4 / 100);   
    const date = +new Date();

    return (
        <View style={styles.container}>
            <Text>Email:{authentication.currentUser?.email} </Text>

            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText} >Sign Out </Text>
            </TouchableOpacity>

    

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

</KeyboardAvoidingView>

    )
}



export default HomeScreen


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
    


import { authentication } from './firebase-config'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Input, KeyboardAvoidingView, ScrollView } from 'react-native'




const HomeScr2 = () => {

    const navigation = useNavigation()
    const handleSignOut = () => {
        authentication.signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const [percentGas8, setPercentGas8] = useState('')
    const [percentGasB, setPercentGasB] = useState('')
    const [percentGasA, setPercentGasA] = useState('')
    const [percentGas5, setPercentGas5] = useState('')



    const [total8, setTotal8] = useState('')
    const [totalB, setTotalB] = useState('')
    const [totalA, setTotalA] = useState('')
    const [total5, setTotal5] = useState('')



    const addThemTogether8 = () => setTotal8(+percentGas8 * 4500 * 4 / 100)
    const addThemTogetherB = () => setTotalB(+percentGasB * 4500 * 4 / 100)
    const addThemTogetherA = () => setTotalA(+percentGasA * 4500 * 4 / 100)
    const addThemTogether5 = () => setTotal5(+percentGas5 * 4500 * 4 / 100)




    return (
        <View style={styles.container}>

            <View style={styles.InputcontainerGas}>
                <Text> นำ้แก๊ส 8โมงเช้า :  {total8}   KG</Text>
                <TextInput
                    placeholder="%Gas"
                    value={percentGas8}
                    onChangeText={Number => setPercentGas8(Number)}
                    style={styles.inputGas}
                    clearButtonMode='always' />
            </View>

            <TouchableOpacity
                onPress={addThemTogether8}
                style={styles.buttonGas}
            >
                <Text style={styles.buttonTextGas}>ใส่ % นำ้แก็ส 8โมงเช้า</Text>

            </TouchableOpacity>

            <View style={styles.InputcontainerGas}>

                <Text> นำ้แก๊สก่อนเติม :  {totalB}   KG</Text>
                <TextInput
                    placeholder="%Gas"
                    value={percentGasB}
                    onChangeText={Number => setPercentGasB(Number)}
                    style={styles.inputGas}
                    clearButtonMode='always' />
            </View>

            <TouchableOpacity
                onPress={addThemTogetherB}
                style={styles.buttonGas}
            >
                <Text style={styles.buttonTextGas}>ใส่ % นำ้แก็ส ก่อนเติม</Text>

            </TouchableOpacity>
            <View style={styles.InputcontainerGas}>

                <Text> นำ้แก๊ส หลังเติม:  {totalA}   KG</Text>
                <TextInput
                    placeholder="%Gas"
                    value={percentGasA}
                    onChangeText={Number => setPercentGasA(Number)}
                    style={styles.inputGas}
                    clearButtonMode='always' />
            </View>

            <TouchableOpacity
                onPress={addThemTogetherA}
                style={styles.buttonGas}
            >
                <Text style={styles.buttonTextGas}>ใส่ % นำ้แก็ส หลังเติม</Text>

            </TouchableOpacity>
            <View style={styles.InputcontainerGas}>

                <Text> นำ้แก๊ส 5 โมง :  {total5}   KG</Text>
                <TextInput
                    placeholder="%Gas"
                    value={percentGas5}
                    onChangeText={Number => setPercentGas5(Number)}
                    style={styles.inputGas}
                    clearButtonMode='always' />
            </View>

            <TouchableOpacity
                onPress={addThemTogether5}
                style={styles.buttonGas}
            >
                <Text style={styles.buttonTextGas}>ใส่ % นำ้แก็ส    5 โมง</Text>

            </TouchableOpacity>



            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Out </Text>
            </TouchableOpacity>
            <Text>Email:{authentication.currentUser?.email} </Text>



        </View>
    )
}

export default HomeScr2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "",
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,

    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },

    buttonGas: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 2,
    },
    buttonTextGas: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },


    buttonOut: {
        backgroundColor: '#0788F9',
        width: '50%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,

    },
    buttonTextOut: {
        color: 'white',
        fontWeight: '700',
        fontSize: '16',
    },

    inputGas: {
        backgroundColor: '#33E0FF',
        paddingHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    InputcontainerGas: {
        width: '50%'
    },

})
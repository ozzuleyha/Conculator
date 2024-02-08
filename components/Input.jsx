import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = () => {
  return (
    <View>
        <TextInput style={styles.input} placeholder="0" placeholderTextColor="white" />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "black",
        color: "black",
        fontSize: 40,
        textAlign: "right",
        marginBottom: 10,
    }
})
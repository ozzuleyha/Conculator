import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({value}) => {
  return (
    <View>
        <TextInput style={styles.input} placeholder="0" placeholderTextColor="white" editable={false} value= {value}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "black",
        fontSize: 40,
        textAlign: "right",
        marginBottom: 10,
        color: "#fff",
        marginRight: 20,
    }
})
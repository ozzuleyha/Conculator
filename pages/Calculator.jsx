import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import React from 'react'

const handleOnPress = () => {
    console.log("hello")
    }


const Calculator = () => {
  return (
    <View style={styles.container}>
      <Button buttonColor= "green" buttonValue="1" onPress={handleOnPress} textColor="white"/>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
      }
})
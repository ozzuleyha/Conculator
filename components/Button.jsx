import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button = ({textColor, buttonColor, buttonValue, onPress}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: buttonColor}]}>
            <Text style={[styles.buttonText, {color: textColor}]}>{buttonValue}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    buttonText: {
        fontSize: 30,
        color: "red",
    }

});
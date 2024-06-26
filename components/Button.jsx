import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button = ({textColor, buttonColor, buttonValue, onPress, buttonSize, buttonHeight}) => {
  return (
    <View >
        <TouchableOpacity onPress={() => onPress && onPress(buttonValue)} style={[styles.button, {backgroundColor: buttonColor, width: buttonSize, height: buttonHeight}]}>
            <Text style={[styles.buttonText, {color: textColor}]}>{buttonValue}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "500",
        color: "red",
    }

});
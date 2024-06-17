import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import Button from '../components/Button'
import {useState} from 'react'
import Input from '../components/Input'




const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const {height, width} = useWindowDimensions();

  const buttonWidth = ((width -32)-5*16) / 4;
  const doubleButtonWidth = buttonWidth * 2 + 16;

  const handleOnPress = (value) => {
    console.log("value", value);
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setInput(evalResult.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === '-/+') {
      if (input) {
        if (input.startsWith('-')) {
          setInput(input.substring(1));
        } else {
          setInput('-' + input);
        }
      }
    } else {
      setInput(input + value);
    } 
      };


  return (
    <>
    <Input  value={input} />
  
    <View style={styles.buttonContainer}>
      <Button buttonColor= "#a6a6a6" buttonValue="C" onPress={handleOnPress} textColor="black" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#a6a6a6" buttonValue="-/+" onPress={handleOnPress} textColor="black" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#a6a6a6" buttonValue="%" onPress={handleOnPress} textColor="black" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "orange" buttonValue="/" onPress={handleOnPress} textColor="white"buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="7" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="8" onPress={handleOnPress} textColor="white"buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="9" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "orange" buttonValue="*" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="4" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="5" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="6" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "orange" buttonValue="-" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="1" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="2" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="3" onPress={handleOnPress} textColor="white"buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "orange" buttonValue="+" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="0" onPress={handleOnPress} textColor="white" buttonSize={doubleButtonWidth} buttonHeight={buttonWidth}/>
      <Button buttonColor= "#495057" buttonValue="." onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>    
      <Button buttonColor= "orange" buttonValue="=" onPress={handleOnPress} textColor="white" buttonSize={buttonWidth} buttonHeight={buttonWidth}/>
  


    </View>

    </>
  )
}

export default Calculator

const styles = StyleSheet.create({
    buttonContainer: {
      marginBottom: 56,
      marginHorizontal: 16,
      flexDirection: "row",
      flexWrap: "wrap",
    }
})
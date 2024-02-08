import { StyleSheet, Text,  View } from 'react-native';
import React from 'react';
import Calculator from './pages/Calculator';

const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-end', 
  }
});
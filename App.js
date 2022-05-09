import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [borderSize, setBorderSize] = useState(0);
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.btnsContainer}>
        <View style={[{ borderWidth: borderSize }, styles.btnWrapper]}>
          <Button title='Increase border size' onPress={() => setBorderSize(prev => prev + 1)} />
        </View>
        <View style={[{ borderWidth: borderSize }, styles.btnWrapper]}>
          <Button color="#c1c1c1" title='Reset border' onPress={() => setBorderSize(0)} />
        </View>
      </View>
      <Text>Current border size: {borderSize} px</Text>
      <TextInput style={{borderWidth:1,padding:5, borderRadius:5, width:"80%",marginTop:10}} placeholder='Enter your name' value={name} onChangeText={(txt) => setName(txt)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15
  },
  btnWrapper: {
    borderColor: "orange",
    borderRadius: 5
  }
});

import React ,{useState} from "react"

import {TextInput, StyleSheet, SafeAreaView} from 'react-native'

const InputT= () => {
  const [text, onChangeText] = React.useState("Placeholder");
  const [number, onChangeNumber] = React.useState(null);
  return(
    <SafeAreaView>
      <TextInput
      style={styles.input}
        onChangeText={onChangeNumber}
        value = {number}
        placeholder="Placeholder"
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default InputT;
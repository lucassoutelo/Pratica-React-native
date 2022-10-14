import React from "react"

import {TextInput, StyleSheet, SafeAreaView, View, Button} from 'react-native'
import Comp1 from "./comp1";
import InputT from "./inputT";

const Options = (props) =>{
  return(
    <View>
      <Button onPress={() => props.setPagina(<Comp1/>)} title="Home"/>
      <Button onPress={() => props.setPagina(<InputT/>)} title="Formulario" />
    </View>
  )
}

export default Options;
import React from "react"

import {TextInput, StyleSheet, SafeAreaView, View, Button} from 'react-native'
import Comp1 from "./comp1";
import InputT from "./inputT";
import ListEmployees from "./listEmployees";

const Options = (props) =>{
  return(
    <View>
      <Button onPress={() => props.setPagina(<Comp1/>)} title="Home"/>
      <Button onPress={() => props.setPagina(<InputT/>)} title="Formulario" />
      <Button onPress={() => props.setPagina(<ListEmployees/>)} title="Funcionarios" />
    </View>
  )
}

export default Options;
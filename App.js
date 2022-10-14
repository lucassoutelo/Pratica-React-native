/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet, StatusBar
} from 'react-native';
import Comp1 from './componentes/comp1';
import data from './dados/data.json'
import inpuT from './componentes/inputT.js'
import Mudanca from './componentes/mudanca';
import Options from './componentes/options';


const App = () =>{
  const [pagina, setPagina] = useState(<Comp1/>);
  
  return(
    <View>
      <Options setPagina={setPagina} />
      <Mudanca pagina={pagina} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nome: {
    fontSize: 16,
  },
});

export default App;

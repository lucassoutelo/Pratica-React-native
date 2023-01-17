/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet, StatusBar
} from 'react-native';

import Mudanca from './componentes/mudanca';
import Options from './componentes/options';


const App = () =>{
  const [pagina, setPagina] = useState(<Mudanca/>);
  return(
    <View>
      <Options setPagina={setPagina} />
      <Mudanca pagina={pagina} />
    </View>
  )
}

export default App;

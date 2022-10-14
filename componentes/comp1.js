import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';

function  Comp1(props){
  let cor = props.cor;
    return(
      <View>
    <Text style={styles.txt2}>
      Tribunal de Justiça do Estado do Amapá
    </Text>
    </View>
    );
  };

const styles = StyleSheet.create({
  txt1:{
    //color:'#f00',
    fontSize: 20,
  },
  txt2:{
    //color:'#00f',
    fontSize:27,
    fontStyle:"italic",
    fontWeight: "bold"
    //fontFamily: "Mapglyphs"
  }
})

export default Comp1;


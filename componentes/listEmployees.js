import React,{useEffect, useState} from "react";
import {ActivityIndicatorComponent, FlatList, View, Text, ActivityIndicator} from 'react-native';

export default function ListEmployees(){
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(
    ()=>{
      fetch('https://crud-funcionarios-simples.herokuapp.com/')
        .then((resp)=>resp.json())
        .then((json)=>setData(json.emp))
        .catch(()=>(alert('Erro ao carregar funcionários')))
        .finally(()=>isLoading(false))
    },[]
  )

  return(
    <View>
      {
        loading ? <ActivityIndicator/> : (
          <FlatList
          data={data}
          keyExtractor={({id}, index)=>id}
          renderItem={({item})=>(
            <Text>{item.name}, {item.lastName}, {item.email}, {item.departmentId}</Text>
          )}
        />
        )
      }
    </View>
  )
}

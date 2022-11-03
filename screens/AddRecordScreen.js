
import React from 'react'
import { View, Text } from 'react-native';

export default function AddRecordScreen(props) {

  const { patient } = props.route.params;

  return (
    <View>
      <Text>Add Record Screen</Text>
      <Text>{patient.name}</Text>
      <Text>{patient.age}</Text>
   </View>
  )
}


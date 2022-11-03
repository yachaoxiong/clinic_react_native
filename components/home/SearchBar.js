import React from 'react'
import { View, Text, TextInput } from 'react-native';
import styles from './styles/useStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar(props) {
  
  const { placeholder, onChangeText } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
      />
      <Ionicons
        name="search"
        size={20}
        style={styles.icon}
      />
    </View>
  )
}

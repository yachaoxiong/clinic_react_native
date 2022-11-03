import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import styles from './styles/appCheckboxStyle';

export default function AppCheckbox(props) {
  const { title, onPress, isChecked, style } = props;
  return (
    <View style={{...styles.container, ...style}} >
      <TouchableOpacity style={isChecked ? styles.active : styles.checkbox} onPress={onPress}>
      </TouchableOpacity>
      <Text style={styles.label}>{title}</Text>
    </View>

  )
}

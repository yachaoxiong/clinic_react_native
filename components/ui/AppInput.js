import React,{ useState } from 'react'
import { TextInput, View, Text } from 'react-native';
import styles from './styles/appInputStyle';
import getAppStyle from '../../common/styles';
export default function AppInput(props) {
   
  const { label, placeholder, value, onChangeText } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={isFocused ? styles.inputFocused : styles.input}
        placeholder={placeholder}
        value={value.toString()}
        onChangeText={text => onChangeText(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
       />
    </View>
   
  )
}

import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import getButtonStyle from './styles/appButtonStyle';

export default function AppButton(props) {

  const { title, buttonType, onPress, style } = props;

  const buttonStyle = getButtonStyle(buttonType);

  return (
    <TouchableOpacity style={{...buttonStyle.container, ...style}} onPress={onPress}>
        <Text style={buttonStyle.text}>{title}</Text>
     </TouchableOpacity>
  )
}

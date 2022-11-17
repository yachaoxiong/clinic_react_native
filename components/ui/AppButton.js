import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import getButtonStyle from './styles/appButtonStyle';

export default function AppButton(props) {

  const { title, buttonType, onPress, style, disabled } = props;

  const buttonStyle = getButtonStyle(buttonType);

  return (
    <TouchableOpacity style={{...buttonStyle.container, ...style, backgroundColor:disabled?"gray": buttonStyle.container.backgroundColor }} onPress={onPress} disabled={disabled}>
        <Text style={buttonStyle.text}>{title}</Text>
     </TouchableOpacity>
  )
}

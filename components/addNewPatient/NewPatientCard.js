import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles/useNewPatientCardStyle';

export default function NewPatientCard(props) {
  const { patientInfo } = props;
  const keys = Object.keys(patientInfo);

  const renderPatientInfo = keys.map((key, index) => {
    return (
      key === 'doctor' ? null :
      <View key={index} style={styles.infoRow}>
        <Text style={styles.label}>{key}</Text>
        <Text style={styles.value}>{patientInfo[key]}</Text>
      </View>
    )
  })
  return (
    <View style={styles.container}>
      {renderPatientInfo}
    </View>
  )
}

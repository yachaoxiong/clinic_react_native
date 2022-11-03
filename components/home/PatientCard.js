import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/useStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PatientCard(props) {

  const { patient, onPress } = props;
  
  return (
    <TouchableOpacity
      style={styles.patientCardContainer}
      onPress={onPress}
    >
      <View style={styles.patientCardLeft}>
        <FontAwesome name="ambulance" size={50} style={styles.patientCardIcon} />
        <Text style={styles.patientCardDepartment}>{patient?.department}</Text>
      </View>
      <View style={styles.patientCardRight}>
        <Text style={styles.patientCardName}>{patient?.firstName} {patient?.lastName}</Text>
        <Text style={styles.patientCardInfo}>{patient.gender} - {patient?.age} years old</Text>
        <Text style={styles.patientCardInfo}>{patient?.address}</Text>
        {
          patient?.status === 'critical' ?
            <Text style={styles.patientCardStatusCritical}>Critical</Text>
            :
            <Text style={styles.patientCardStatusNormal}>Normal</Text>
        }
      </View>    
    </TouchableOpacity>
  )
}

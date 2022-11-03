import React from 'react'
import { View, Text, Button } from 'react-native';
import styles from './styles/useCardStyles';
import moment from 'moment';
export default function PatientDetailsCard(props) {
  const { patient } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{patient.age}</Text>
          <Text style={styles.label}>Age</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{patient.gender}</Text>
          <Text style={styles.label}>gender</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{moment(patient?.birthDate).format('YYYY-MM-DD')}</Text>
          <Text style={styles.label}>Date of birth</Text>
        </View>
      </View>
      <View style={styles.contactSection}>
        <View style={styles.contactItem}> 
          <Text style={styles.label}>phone</Text>
          <Text style={styles.infoText}>{patient.phone}</Text>
        </View>
        <View style={styles.contactItem}> 
          <Text style={styles.label}>email</Text>
          <Text style={styles.infoText}>{patient.email}</Text>
        </View>
        <View style={styles.contactItem}> 
          <Text style={styles.label}>address</Text>
          <Text style={styles.infoText}>{patient.address}</Text>
        </View>
      </View>
    </View>
  )
}

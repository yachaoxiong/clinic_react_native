import React from 'react'
import { View, Text, Button } from 'react-native';
import { calculateBMI } from '../../../utils/functions';
import styles from './styles/useBMICardStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function BMICard(props) {

  const { patient } = props;
  const bmiResult = calculateBMI(patient?.weight, patient?.height);
  
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={bmiResult?.result.toLocaleLowerCase() === "normal" ? styles.title : styles.smTitle}>{bmiResult.result}</Text>
        <Text style={styles.value}>BMI {bmiResult.bmi}</Text>
      </View>
      <View style={styles.containerRight}>
        <Ionicons name="ios-body" size={69} color="#fff" />
        <View style={styles.bodyContainer}>
          <View style={styles.bodyInfoRow}>
              <Text style={styles.infoValue}>
                <Text style={styles.height}>{patient.height}</Text>
                <Text style={styles.heightUnit}>cm</Text>
              </Text>
              <Text style={styles.heightLabel}>
                Height
              </Text>
          </View>
          <View style={styles.bodyInfoRow}>
              <Text style={styles.infoValue}>
                <Text style={styles.height}>{patient.weight}</Text>
                <Text style={styles.heightUnit}>kg</Text>
              </Text>
              <Text style={styles.heightLabel}>
                weight
              </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

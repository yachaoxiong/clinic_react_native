import React from 'react'
import { View, Text,} from 'react-native';
import styles from './styles/useTestCardStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function TestCard(props) {
  
  const { record } = props;

  return (
    <View style={styles.container}>
      {record.status === 'critical' && <Text style={styles.status}>critical</Text>}
      {
        record.type === 'Blood Pressure' 
        ? <Fontisto name="blood-drop" size={30} color="#E14D2A" />
        : record.type === 'Blood Oxygen Level' 
        ? <Fontisto name="blood-test" size={30} color="#3E6D9C" />
        : record.type === 'Respiratory Rate'
        ? <Feather name="wind" size={30} color="#3E6D9C" />
        : <FontAwesome name="heartbeat" size={30} color="#E14D2A" />
        
      }
      <View style={styles.containerRight}>
        <Text style={record.status === "normal" ? styles.valueNormal : styles.valueDanger}>
        {record.value}</Text>
        <Text style={styles.type}>{record.type}({record.unit})</Text>  
        <Text style={styles.date}>
          <AntDesign name="clockcircleo" size={12} color="#b4b4b4" />
          {record.date}
        </Text>
      </View>  
    </View>
  )
}

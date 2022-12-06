import React from 'react'
import { View, Text,} from 'react-native';
import styles from './styles/useTestCardStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
export default function TestCard(props) {
  
  const { record } = props;
  return (
    <View style={styles.container}>
      {record.isCritical && <Text style={styles.status}>critical</Text>}
      {
        record.category === 'Blood Pressure' 
        ? <Fontisto name="blood-drop" size={30} color="#E14D2A" />
        : record.category === 'Blood Oxygen Level' 
        ? <Fontisto name="blood-test" size={30} color="#3E6D9C" />
        : record.category === 'Respiratory Rate'
        ? <Feather name="wind" size={30} color="#3E6D9C" />
        : <FontAwesome name="heartbeat" size={30} color="#E14D2A" />
        
      }
      <View style={styles.containerRight}>
        {
            record.category === 'Blood Pressure' ?
              <Text style={record.isCritical ? styles.valueNormal : styles.valueDanger}>
                {record.readings[0].value}/{record.readings[1].value}
              </Text>
            :
              <Text style={record.isCritical ? styles.valueNormal : styles.valueDanger}>
                {record.readings[0].value}
              </Text>
        }
        <Text style={styles.type}>{record.category} ({record.category === 'Blood Pressure' ? 'X/Y mmHg' : record.category === 'Blood Oxygen Level' ? '%' : 'bpm'})</Text>
        <Text style={styles.date}>
          <AntDesign name="clockcircleo" size={12} color="#b4b4b4" />
          {moment(record.date).format('DD/MM/YYYY HH:mm')}
        </Text>
      </View>  
    </View>
  )
}

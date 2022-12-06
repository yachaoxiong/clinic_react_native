import React from 'react'
import { FlatList, View, SafeAreaView } from 'react-native';
import TestCard from './components/TestCard';
import styles from './styles/useStyles';
import usePatientTestHooks  from '../../hooks/usePatientTestHooks';
export default function Record(props) {

  const { patient } = props;
  const recordList = usePatientTestHooks(patient?._id);

  return (
    <View style={styles.recordContainer}>
      {
        recordList &&
        <FlatList
          data={recordList}
          renderItem={({ item }) => <TestCard record={item} />}
          keyExtractor={item => item._id}
          contentContainerStyle={{ paddingBottom: 120 }}
          />
      }
    </View>
  )
}

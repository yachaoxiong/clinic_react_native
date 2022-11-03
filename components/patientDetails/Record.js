import React from 'react'
import { FlatList, View, SafeAreaView } from 'react-native';
import TestCard from './components/TestCard';
import styles from './styles/useStyles';

export default function Record(props) {

  const { records } = props;

  return (
    <View style={styles.recordContainer}>
      <FlatList
        data={records}
        renderItem={({ item }) => <TestCard record={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        />
    </View>
  )
}

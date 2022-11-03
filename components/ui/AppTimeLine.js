import React from 'react'
import { View, Text, Button, ScrollView, FlatList } from 'react-native';
import styles from './styles/appTimeLineStyle';

export default function AppTimeLine(props) {
  const { listData } = props;

  return (
    <View style={styles.container}>
       <FlatList
          data={listData}
          renderItem={({ item, index }) =>
            <View style={styles.listContainer}>
              <View style={styles.circle}></View>
              { (listData.length-1)>index && <View style={styles.line}></View>}
              <Text style={styles.action}>{item.action}</Text>
              <Text style={styles.date}>{item.date}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

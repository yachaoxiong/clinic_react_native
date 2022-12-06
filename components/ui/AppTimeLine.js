import React from 'react'
import { View, Text, Button, ScrollView, FlatList } from 'react-native';
import styles from './styles/appTimeLineStyle';
import moment from 'moment';

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
              <Text style={styles.action}>{item?.description}</Text>
              <Text style={styles.date}>{moment(item?.createdAt).format('DD/MM/YYYY')}</Text>
          </View>
        }
        keyExtractor={item => item?._id}
      />
    </View>
  )
}

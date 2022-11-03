import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
import AppTimeLine from '../ui/AppTimeLine';

export default function History(props) {
  const { historyList } = props;
  return (
    <View>
       <AppTimeLine listData={historyList} />
    </View>
  )
}

import React from 'react'
import { View } from 'react-native';
import AppTimeLine from '../ui/AppTimeLine';
import usePatientHistoryHooks from '../../hooks/usePatientHistoryHooks';

export default function History(props) {
  const { patient } = props;
  const historyList = usePatientHistoryHooks(patient?._id);
  return (
    <View>
       <AppTimeLine listData={historyList} />
    </View>
  )
}

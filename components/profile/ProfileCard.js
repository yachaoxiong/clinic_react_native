import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Switch } from 'react-native';
import styles from './styles/useSettingCardStyle';
import moment from 'moment';
import AppButton from '../ui/AppButton';
import { removeToken } from '../../utils/functions';
import { StoreContext } from '../../store/store';

export default function ProfileCard(props) {
  const { myUser, updateUser } = useContext(StoreContext);

  const logout = async () => {
    try {
      updateUser(null) 
      removeToken();
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionRow}>
        <Text style={styles.text}>username</Text>
        <Text style={styles.value}>{myUser?.username}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.sectionRow}>
        <Text style={styles.text}>email</Text>
        <Text style={styles.value}>{myUser?.email}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.sectionRow}>
        <Text style={styles.text}>last update</Text>
        <Text style={styles.value}>{moment(myUser?.updatedAt).format('DD/MM/YYYY')}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.sectionRow}>
        <Text style={styles.text}></Text>
        <AppButton title="LogOut" buttonType="outlineSmall" onPress={logout}
        />
      </View>
    </View>
  )
}

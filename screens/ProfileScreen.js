import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import ProfileCard from '../components/profile/ProfileCard';
import { StoreContext } from '../store/store';

export default function ProfileScreen(props) {
  
  const { myUser } = useContext(StoreContext);

  return (
    <View>
      <ProfileCard myUser={myUser} {...props} />
   </View>
  )
}


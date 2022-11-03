import React,{ useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/useLoginStyle';
import { StoreContext } from '../store/store';
import AppButton from '../components/ui/AppButton';
import AppInput from '../components/ui/AppInput';
import { login } from '../auth/auth';

export default function LoginScreen(props) {

  const {myUser, updateUser} = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      setMessage('Please fill in all fields');
    }else {
      login(username, password)
        .then(res => {
          if (res.user) {
            updateUser(res.user);
            props.navigation.navigate('Home');
          } else {
            setMessage(res.message);
          }
        }).catch(err => {
          setMessage(err.message);
        })
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image
        style={styles.logo}
        source={require('../assets/login.png')}
      />
      <AppInput 
        placeholder="username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <AppInput 
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Text style={styles.message}>{message}</Text>
      <AppButton 
        title="Login"
        onPress={handleLogin}
      />
      <View style={styles.textRow}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity  onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.link}> Register</Text>
        </TouchableOpacity>
      </View>
   </View>
  )
}

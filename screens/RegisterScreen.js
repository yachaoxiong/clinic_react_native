import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import AppButton from '../components/ui/AppButton';
import styles from './styles/useLoginStyle';
import AppInput from '../components/ui/AppInput';
import AppSelect from '../components/ui/AppSelect';
import { register } from '../auth/auth';
export default function RegisterScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const roleOptions = [
    "doctor",
    "nurse",
  ]

  const handleRegister = () => {
    if (username === '' || password === ''|| email === ''|| confirmPassword === ''|| role === '') {
      setMessage('Please fill in all fields');
      return
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return
    }
    register(username, password, email, role)
      .then(res => {
        if (res === 'success') {
          props.navigation.navigate('Login');
        } 
      }
      ).catch(err => {
        setMessage(err.message);
      })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Image
        style={styles.logo}
        source={require('../assets/register.png')}
      />
      <AppInput 
        placeholder="username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <AppInput
        placeholder="your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <AppSelect
        placeholder="Select your Role"
        data={roleOptions}
        setValue={text => setRole(text)}
      />
      <AppInput 
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
    
      <AppInput
        placeholder="confirm password"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry={true}
      />
      <Text style={styles.message}>{message}</Text>
      <AppButton 
        title="Create Account"
        onPress={handleRegister}
      />
      <AppButton
        title="Back to Login"
        onPress={() => props.navigation.navigate('Login')}
        style={{ marginTop: 10 }}
        buttonType = 'secondary'
      />
   </View>
  )
}


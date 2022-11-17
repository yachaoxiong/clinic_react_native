import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import AppButton from '../ui/AppButton';
import AppInput from '../ui/AppInput';
import AppSelect from '../ui/AppSelect';
import NewPatientCard from './NewPatientCard';
import styles from './styles/usePatientInfoStyle';
import { addNewPatient } from '../../services/patientServices';

export default function BasicForm(props) {
  const [title, setTitle] = useState('1/3 Basic Information');
  const [tab, setTab] = useState(1);
  const [PatientInfo, setPatientInfo] = useState({
    firstName: '',
    lastName: '',
    department: '',
    age: '',
    gender: '',
    birthDate: '',
    address: '',
    phone: '',
    email: '',
    doctor: '',
    height: '',
    weight: '',
  });

  const canAddContactInfo = PatientInfo?.firstName && PatientInfo?.lastName && PatientInfo?.department && PatientInfo?.age && PatientInfo?.gender && PatientInfo?.birthDate 

  const canReview = PatientInfo?.address && PatientInfo?.phone && PatientInfo?.email && PatientInfo?.height && PatientInfo?.weight
  
  const genderOptions = [
    'male',
    'female',
    'other',
  ]
  const basicInfo = [
    {
      id: 1,
      keyName: 'firstName',
      placeholder: 'First Name',
      value: PatientInfo.firstName,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 2,
      keyName: 'lastName',
      placeholder: 'Last Name',
      value: PatientInfo.lastName,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },    
    {
      id: 3,
      keyName: 'age',
      placeholder: 'Age',
      value: PatientInfo.age,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 4,
      keyName:'gender',
      placeholder: 'Gender',
      value: PatientInfo.gender,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
      options: genderOptions,
    },
    {
      id: 5,
      keyName: "birthDate",
      placeholder: "Birth Date",
      value: PatientInfo.birthDate,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 6,
      keyName: 'department',
      placeholder: 'Department',
      value: PatientInfo.department,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    }
  ]
  const contactInfo = [
    {
      id: 1,
      keyName: 'email',
      placeholder: 'Email',
      value: PatientInfo.email,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 2,
      keyName: 'phone',
      placeholder: 'Phone',
      value: PatientInfo.phone,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 3,
      keyName: 'address',
      placeholder: 'Address',
      value: PatientInfo.address,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 4,
      keyName: 'height',
      placeholder: 'Height (cm)',
      value: PatientInfo.height,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 5,
      keyName: 'weight',
      placeholder: 'Weight (kg)',
      value: PatientInfo.weight,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    }
  ]

  const handleUpdatePatientInfo = (key, value) => {
    setPatientInfo({ ...PatientInfo, [key]: value });
  };

  const handleAddNewPatient = () => {
  
    addNewPatient(PatientInfo).then((res) => {
      props.navigation.navigate('Patients');
    }).catch((error) => {
      console.log(error);
    })
  };


  const renderBasicInfo = basicInfo.map((item) => {
    return (
      item.options ? 
       <AppSelect
          key={item.id}
          placeholder={item.placeholder}
          value={item.value}
          setValue={(text) => handleUpdatePatientInfo(item.keyName, text)}
          data={item.options}
        /> 
      : 
      <AppInput
        key={item.id}
        placeholder={item.placeholder}
        value={item.value}
        onChangeText={(text) => handleUpdatePatientInfo(item.keyName, text)}
      />
          
    )
  })

  const renderContactInfo = contactInfo.map((item) => {
    return (
      <AppInput
        key={item.id}
        placeholder={item.placeholder}
        value={item.value}
        onChangeText={(text) => handleUpdatePatientInfo(item.keyName, text)}
      />
    )
  })
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.formContainer}>
        {tab === 1 ? renderBasicInfo : tab === 2 ? renderContactInfo : <NewPatientCard patientInfo={PatientInfo} />}
      </View>
      <View style={styles.buttonContainer}>
      {
        tab === 1
        ? <AppButton
          title="Next"
          onPress={() => {
            setTab(pre => pre + 1);
            setTitle('2/3 More Information') 
          }}
          disabled={!canAddContactInfo}
        />
        : tab === 2 ?
        <AppButton
          title="Next"
          onPress={() => {
            setTab(pre => pre + 1);
            setTitle('3/3 Confirm Information')
          }}
          disabled={!canReview}
        />
        : <AppButton
          title="Submit"
          onPress={handleAddNewPatient}
        />
      }
      </View>
    </View>
  )
}

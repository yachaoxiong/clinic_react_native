
import React, { useEffect, useState} from 'react'
import { View, Text, ScrollView } from 'react-native';
import AppInput from '../components/ui/AppInput';
import AppSelect from '../components/ui/AppSelect';
import AppButton from '../components/ui/AppButton';
import styles from './styles/useEditPatientStyle';
import { updatePatient } from '../services/patientServices';
import moment from 'moment';
export default function EditPatient(props) {

  const { patient,setPatients } = props.route.params;
  const [patientInfo, setPatientInfo] = useState({...patient});

  const genderOptions = [
    'male',
    'female',
    'other',
  ]
  const statusOptions = [
    'critical',
    'normal',
  ]
  const handleUpdatePatientInfo = (key, value) => {
    setPatientInfo({
      ...patientInfo,
      [key]: value
    })
  }

  const patientUpdateForm = [
    {
      id: 1,
      keyName: 'firstName',
      placeholder: 'First Name',
      value: patientInfo?.firstName,
      type: 'text',
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 2,
      keyName: 'lastName',
      placeholder: 'Last Name',
      value: patientInfo?.lastName,
      type: 'text',
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },    
    {
      id: 3,
      keyName: 'age',
      placeholder: 'Age',
      value: patientInfo?.age.toString(),
      type: 'number',
      onChangeText: (text) => handleUpdatePatientInfo(keyName, +text),
    },
    {
      id: 4,
      keyName:'gender',
      placeholder: 'Gender',
      value: patientInfo?.gender,
      type: 'text',
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
      options: genderOptions,
    },
    {
      id: 5,
      keyName: "birthDate",
      placeholder: "Birth Date",
      value: moment(patientInfo?.birthDate).format('YYYY-MM-DD'),
      type: "text",
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 6,
      keyName: 'department',
      placeholder: 'Department',
      type: 'text',
      value: patientInfo?.department,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 7,
      keyName: 'email',
      placeholder: 'Email',
      type: 'text',
      value: patientInfo?.email,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 8,
      keyName: 'phone',
      placeholder: 'Phone',
      type: 'text',
      value: patientInfo?.phone,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 9,
      keyName: 'address',
      placeholder: 'Address',
      type: 'text',
      value: patientInfo?.address,
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
    },
    {
      id: 10,
      keyName: 'height',
      placeholder: 'Height (cm)',
      type: 'number',
      value: patientInfo?.height.toString(),
      onChangeText: (text) => handleUpdatePatientInfo(keyName, +text),
    },
    {
      id: 11,
      keyName: 'weight',
      placeholder: 'Weight (kg)',
      type: 'number',
      value: patientInfo?.weight.toString(),
      onChangeText: (text) => handleUpdatePatientInfo(keyName, +text),
    },
    {
      id: 12,
      keyName:'status',
      placeholder: 'Status',
      value: patientInfo?.status,
      type: 'text',
      onChangeText: (text) => handleUpdatePatientInfo(keyName, text),
      options: statusOptions,
    }
  ]
  const handleUpdatePatient = () => {
    updatePatient(patientInfo).then((response) => {
      props.navigation.replace("Home")
    }).catch((error) => {
      console.log(error)
    })
  }
  const renderUpdateForm =  patientUpdateForm.map((item) => {
    return (
      item.options ? 
      <AppSelect
         key={item.id}
         placeholder={item.placeholder}
         value={item.value}
         defaultValue={item.value}
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
      

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {renderUpdateForm}
        <View style={styles.buttonContainer}>
          <AppButton
            title="Update"
            onPress={handleUpdatePatient}
            />
        </View>
      </ScrollView>
   </View>
  )
}
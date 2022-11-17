import React from 'react'
import { View, Text } from 'react-native';
import PatientInfo from '../components/addNewPatient/PatientInfo';

export default function NewPatientScreen(props) {
  return (
    <PatientInfo {...props} />
  )
}

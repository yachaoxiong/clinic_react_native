import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
import PatientDetailsCard from './components/PatientDetailsCard';
import BMICard from './components/BMICard';
import styles from './styles/useStyles';
import AppButton from '../ui/AppButton';
import Modal from "react-native-modal";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import getAppStyle from '../../common/styles';
import { deletePatient } from '../../services/patientServices';
export default function Info(props) {

  const { patient } = props;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeletePatient = () => {
    deletePatient(patient._id).then(() => {
      props.navigation.replace('Home');
    }).catch((err) => {
      console.log(err);
    }) 
  }

  return (
    <ScrollView>
      <PatientDetailsCard patient={patient} />
      <BMICard patient={patient} />
      <View style={styles.btnGroup}>
        <AppButton title="Update Patient" buttonType="primary" style={styles.actionBtn} onPress={() => props.navigation.navigate('EditPatient', { patient, ...props})} />
        <AppButton title="Delete Patient" buttonType="danger" style={styles.actionBtn} onPress={() => setOpenDeleteModal(true)} />
      </View> 
      <Modal isVisible={openDeleteModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalButton}>
              <FontAwesome name="close" size={30} color={styles.modalColor.color} onPress={() => setOpenDeleteModal(false)} />
            </View>
           <Text style={styles.modalTitle}>Delete Patient</Text>
           <View style={styles.divider}></View>
           <FontAwesome name="exclamation-circle" size={60} color={getAppStyle().colors.danger} />
            <Text style={styles.modalText}>Are you sure to delete this patient?</Text>
          <AppButton title="Confirm" buttonType="primary" style={styles.actionBtn} onPress={handleDeletePatient} />
          </View>
      </Modal>
    </ScrollView>
  )
}

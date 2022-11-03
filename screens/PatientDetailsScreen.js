import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';
import styles from './styles/usePatientDetailsStyle';
import AppButton from '../components/ui/AppButton';
import TabsBar from '../components/ui/TabsBar';
import Info from '../components/patientDetails/Info';
import Record from '../components/patientDetails/Record';
import History from '../components/patientDetails/History';
import Modal from "react-native-modal";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppInput from '../components/ui/AppInput';
import AppSelect from '../components/ui/AppSelect';


export default function PatientDetails(props) {

  const { patient } = props.route.params;
  const tabs = ['Info', 'Record', 'History'];
  const [activeTab, setActiveTab] = useState("Info");
  const [openAddRecordModal, setOpenAddRecordModal] = useState(false);
  const [testType, setTestType] = useState('Blood Pressure');
  const [nurseName, setNurseName] = useState("");
  const [testValue, setTestValue] = useState("");
  const [testValue2, setTestValue2] = useState("");
  const records = [
     {
      id: 1,
      date: '2020-01-01',
      type: 'Blood Pressure',
      value: '180/29',
      unit: 'X/Y mmHg',
      icon: 'blood',
      status: 'critical',
    },
    {
      id: 2,
      date: '2020-01-01',
      type: 'Blood Oxygen Level',
      value: '96',
      unit: '%',
      icon: 'Oxygen',
      status: 'normal',
    },
    {
      id: 3,
      date: '2020-01-01',
      type: 'Heart Rate',
      value: '10',
      unit: 'bpm',
      icon: 'blood',
      status: 'normal',
    },
    {
      id: 4,
      date: '2020-01-01',
      type: 'Respiratory Rate',
      value: '10',
      unit: 'bpm',
      icon: 'brain',
      status: 'normal',
    },
  ];
  const options = [
    'Blood Pressure',
    'Blood Oxygen Level',
    'Heart Rate',
    'Respiratory Rate'
  ];

  const historyList = [
    {
      id: 1,
      date: '2020-01-01',
      action: 'Added Patient to the system',
      createdBy: 'Dr. John Doe',
    },
    {
      id: 2,
      date: '2020-01-01',
      action: 'Updated Patient details',
      createdBy: 'Dr. John Doe',
    },
    {
      id: 3,
      date: '2020-01-01',
      action: 'Deleted Patient from the system',
      createdBy: 'Dr. John Doe',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
        <Text style={styles.headerText}>{patient.firstName} {patient.lastName}</Text>
        <AppButton
          title="Add Record"
          buttonType="outlineSmall"
          onPress={() => setOpenAddRecordModal(true)}
        />
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.headerDepartment}>{patient.department}</Text>
          <Text style={styles.headerDoctor}>{patient.doctor.username}</Text>
        </View>
      </View>
      <TabsBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {
          activeTab === 'Info'
          ? <Info patient={patient} {...props}/>
          : activeTab === 'Record'
          ? <Record records={records} />
          : <History historyList={historyList} />
      }
      <Modal isVisible={openAddRecordModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalButton}>
              <FontAwesome name="close" size={30} color={styles.modalColor.color} onPress={() => setOpenAddRecordModal(false)} />
            </View>
           <Text style={styles.modalTitle}>Add New Patient</Text>
           <View style={styles.divider}></View>
          <AppSelect data={options} setValue={setTestType}
            defaultValue={testType}
            placeholder="Select Test Type" />
          <AppInput placeholder="Nurse Name" value={nurseName} onChangeText={text => setNurseName(text)} />
          {
            testType === 'Blood Pressure'
              ? (
                <>
                  <AppInput placeholder="Systolic" value={testValue} onChangeText={text => setTestValue(text)} />
                  <AppInput placeholder="Diastolic" value={testValue2} onChangeText={text => setTestValue2(text)} />
                </>
              )
              : <AppInput placeholder="Value"  value={testValue} onChangeText={text => setTestValue(text)} />
          }
          <AppButton title="Add Record" buttonType="primary" style={styles.actionBtn} onPress={() => setOpenAddRecordModal(false)} />
          </View>
      </Modal>
   </View>
  )
}


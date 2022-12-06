import React, { useState, useEffect, useContext } from 'react'
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
import { addNewRecord } from '../services/patientServices';
import { StoreContext } from '../store/store';
export default function PatientDetails(props) {

  const { patient } = props.route.params;
  const { setIsRefreshing } = useContext(StoreContext);
  const tabs = ['Info', 'Record', 'History'];
  const [activeTab, setActiveTab] = useState("Info");
  const [openAddRecordModal, setOpenAddRecordModal] = useState(false);
  const [testType, setTestType] = useState('Blood Pressure');
  const [status, setStatus] = useState('normal');
  const [testValue, setTestValue] = useState("");
  const [testValue2, setTestValue2] = useState("");


  const options = [
    'Blood Pressure',
    'Blood Oxygen Level',
    'Heart Rate',
    'Respiratory Rate'
  ];
  const statusOptions = [
    'critical',
    'normal',
  ]
  const handleAddRecord = () => {
    setOpenAddRecordModal(false);
    let test = {}
    if(testType === 'Blood Pressure'){
       test = {
        "category":testType,
        "readings":[
            {
                "name":"diatomic",
                "value":testValue
            },
            {
                "name":"systolic",
                "value":testValue2
            }
        ],
        patient: patient?._id,
        "isCritical":status === 'critical',
     }
    } else {
      test = {
        "category":testType,
        "readings":[
            {
                "name":"value",
                "value":testValue
            }
        ],
        patient: patient?._id,
        "isCritical":status === 'critical',
     }
    }

    addNewRecord(patient?._id, test).then((res) => {
      setActiveTab('Info');
      setIsRefreshing(pre=>!pre); 
    }
    ).catch((err) => {
      console.log(err);
    })
  }
 
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
          ? <Record  patient={patient}/>
          : <History patient={patient}/>
      }
      <Modal isVisible={openAddRecordModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalButton}>
              <FontAwesome name="close" size={30} color={styles.modalColor.color} onPress={() => setOpenAddRecordModal(false)} />
            </View>
           <Text style={styles.modalTitle}>Add New Record</Text>
           <View style={styles.divider}></View>
          <AppSelect data={options} setValue={setTestType}
            defaultValue={testType}
            placeholder="Select Test Type" />
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
          <AppSelect data={statusOptions} setValue={setStatus} defaultValue={"normal"} placeholder="Select Status" />
          <AppButton title="Add Record" buttonType="primary" style={styles.actionBtn} onPress={handleAddRecord} />
          </View>
      </Modal>
   </View>
  )
}


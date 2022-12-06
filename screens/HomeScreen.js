import React, { useState, useCallback, useEffect } from 'react'
import { View, Image, FlatList,Text } from 'react-native';
import PatientCard from '../components/home/PatientCard';
import SearchBar from '../components/home/SearchBar';
import AppCheckbox from '../components/ui/AppCheckbox';
import styles from './styles/useHomeStyle';
import usePatientHooks from '../hooks/usePatientHooks';

export default function HomeScreen(props) {
 
  const [isCritical, setIsCritical] = useState(false);
  const [isNormal, setIsNormal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const patients = usePatientHooks();
  
  // search function
  const filteredPatients = useCallback(() => {
    return patients?.filter(patient => {
      return patient?.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    }).filter(patient => {
      return isCritical && isNormal ? true : isCritical ? patient.status === 'critical' : isNormal ? patient.status === 'normal' : true;
    });
  }, [searchTerm, isCritical, isNormal, patients]);
   
  return (
    <View style={styles.container}>
      <SearchBar placeholder="Search" onChangeText={(text) => setSearchTerm(text)} />
      <View style={styles.filtersContainer}>
        <AppCheckbox title="critical"
          onPress={() => setIsCritical(pre => !pre)}
          isChecked={isCritical}
          style={styles.filterItem}
        />
        <AppCheckbox
          title="normal"
          onPress={() => setIsNormal(pre => !pre)}
          isChecked={isNormal}
        />
      </View>
      {
        filteredPatients()?.length === 0 ?
        <View style={styles.noResultContainer}>
        <Text style={styles.noResultTitle}>Not found</Text>
        <Image
          style={styles.logo}
          source={require('../assets/notfound.png')}
            />
       </View> :
        <FlatList 
          style={styles.patientsContainer}
          data={filteredPatients()}
          renderItem={({ item }) => <PatientCard patient={item} onPress={() => props.navigation.navigate('PatientDetails', { patient:item })} />}
          keyExtractor={item => item._id}
          contentContainerStyle={{ paddingBottom: 120 }}
        />  
      }
    </View>
  )
}



import React from 'react'
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles/appSelectStyle';
export default function AppSelect(props) {
 
  const { label, setValue, data, placeholder} = props;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <SelectDropdown 
        style={styles.selectContainer}
        data={data}
        {...props}
        defaultButtonText={placeholder}
        onSelect={(selectedItem, index) => {
          setValue(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
        renderDropdownIcon={() => {
          return <Text style={styles.dropdownIcon}>▼</Text>
        }}
        dropdownIconPosition="right"
        rowStyle={styles.rowStyle}
        rowTextStyle={styles.rowTextStyle}
        dropdownStyle={styles.dropdownStyle}
        searchInputStyle={styles.searchInputStyle}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
      />
    </View>
  );

}

import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles/tabsBarStyle';

export default function TabsBar(props) {
  
  const { tabs, activeTab, setActiveTab } = props;
 
  const renderTabs = tabs.map((tab, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={activeTab === tab ? styles.tabItemActive : styles.tabItem}
        onPress={() => setActiveTab(tab)}
      >
        <Text style={activeTab === tab ? styles.tabItemTextActive : styles.tabItemText}>{tab}</Text>
      </TouchableOpacity>
    );
  });
  
  return (
    <View style={styles.tabContainer}>
      {renderTabs}
    </View>
  )
}
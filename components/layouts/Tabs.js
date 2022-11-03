import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import styles from './styles/tabsStyle';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import NewPatient from '../../screens/NewPatientScreen';

import getAppStyle from '../../common/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        unmountOnBlur: true 
      }}
    >
      <Tab.Screen
        name="Patients"
        component={HomeScreen}   
        options={{
          headerTitle: '',
          headerBackground: () => (
            <View style={{ backgroundColor: '#ffffff' }} />
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Patients</Text>
            </View>
          ),
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 20 }}>
              <Ionicons
                name="home"
                size={30}
                color={focused ? getAppStyle().colors.primary : getAppStyle().colors.grey}
              />
              <Text style={{ color: focused ? getAppStyle().colors.primary : getAppStyle().colors.grey, fontSize: 12 }}>Home</Text>
            </View>
          ),
        }} 
      />
      <Tab.Screen
        name="New Patient"
        component={NewPatient}
 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{...styles.addNew, backgroundColor: focused ? getAppStyle().colors.primary : getAppStyle().colors.grey}}>
              <FontAwesome
                name="plus"
                size={30}
                color={"#fff"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: '',
          headerBackground: () => (
            <View style={{ backgroundColor: '#ffffff' }} />
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Profile</Text>
            </View>
          ),
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={styles.settingTab}>
              <FontAwesome
                name="user-circle"
                size={30}
                color={focused ? getAppStyle().colors.primary : getAppStyle().colors.grey}
              />
              <Text style={{ color: focused ? getAppStyle().colors.primary : getAppStyle().colors.grey, fontSize: 12 }}>Profile</Text>
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  )
}


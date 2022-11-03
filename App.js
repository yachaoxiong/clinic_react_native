import React,{ useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './components/layouts/Tabs';
import getAppStyle from './common/styles';
import LoginScreen from './screens/LoginScreen';
import PatientDetails from './screens/PatientDetailsScreen';
import EditPatient from './screens/EditPatientScreen';
import AddRecord from './screens/AddRecordScreen';
import RegisterScreen from './screens/RegisterScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StoreContextProvider from './store/store';
import { StoreContext } from './store/store';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen}
      options={{
        title: '  ',
        headerShadowVisible: false,
      }}
    />
    <AuthStack.Screen name="Register" component={RegisterScreen}
      options={{
        headerBackImage: () => (
          <View style={{ marginLeft: 10 }}>
            <FontAwesome
               name="chevron-left"
               size={20}
              color={getAppStyle().colors.text}
            />
          </View>
        ),
      title: '  ',
      headerShadowVisible: false,
    }}
    />
  </AuthStack.Navigator>
);

export default function App() {
  
  return (
    <StoreContextProvider>
      <StoreContext.Consumer>
        {({ myUser }) => (
        <NavigationContainer>
            <Stack.Navigator>
           {!myUser ? (   
            <Stack.Screen name="Auth" component={AuthStackScreen} options={{ headerShown: false }} />
              ) : (
             <>   
            <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="PatientDetails" component={PatientDetails}
              options={{
                title: 'Patient Details',
                headerBackTitle: ' ',
                headerStyle: {
                  backgroundColor: getAppStyle().colors.background,
                },
                headerBackImage: () => (
                  <View style={{ marginLeft: 10 }}>
                    <FontAwesome
                      name="chevron-left"
                      size={20}
                      color={getAppStyle().colors.text}
                    />
                  </View>
                ),
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen name="EditPatient" component={EditPatient}
              options={{
                title: 'Update Patient',
                headerBackTitle: ' ',
                headerStyle: {
                  backgroundColor: getAppStyle().colors.background,
                },
                headerBackImage: () => (
                  <View style={{ marginLeft: 10 }}>
                    <FontAwesome
                      name="chevron-left"
                      size={20}
                      color={getAppStyle().colors.text}
                    />
                  </View>
                ),
                headerShadowVisible: false,
              }}
            />
             <Stack.Screen name="AddRecord" component={AddRecord} />
             </>  
            )}
          </Stack.Navigator>
          </NavigationContainer>
        )}
       </StoreContext.Consumer>
    </StoreContextProvider>
  );
}





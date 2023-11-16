/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import firebase from 'firebase/app';
import { AuthProvider } from './Hooks/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserContext } from './Hooks/AuthContext';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/OnBoarding';
import FrontScreen from './src/FrontScreen';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import DoctorNavigator from './src/DoctorNavigator'; // Import your DoctorNavigator
import PatientNavigator from './src/PatientNavigator';
import PatientHomeScreen from './Screens/PatientHomeScreen';
import DoctorHomeScreen from './DoctorScreen/DoctorHomeScreen';

const Stack = createNativeStackNavigator();
function App() {
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }
  // const getToken=async()=>{
  //   const token= await messaging().getToken()
  //   console.log("token is ", token)
  // }
  useEffect(() => {
    SplashScreen.hide()
    // requestUserPermission(),
    
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="FrontScreen" component={FrontScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />


          {/* Use a Screen to wrap the DoctorNavigator */}
          {/* {UserRole === 'doctor' ? (
            <Stack.Screen name="DoctorHomeScreen" options={{ headerShown: false }}>
              {() => <DoctorNavigator />}
            </Stack.Screen>
          ) : <Stack.Screen name="PatientHomeScreen" options={{ headerShown: false }}>
          {() => <PatientNavigator />}
        </Stack.Screen>} */}

          <Stack.Screen name="DoctorNavigator" component={DoctorNavigator } />

          <Stack.Screen name="PatientNavigator" component={PatientNavigator} />

        </Stack.Navigator>

      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;





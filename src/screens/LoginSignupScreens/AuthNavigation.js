import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='WelcomePage'>
      <Stack.Screen name="WelcomePage" component={WelcomeScreen} 
      options={
        {
          headerShown:false,
        }
      }
      
      />
      <Stack.Screen name="SignUpPage" component={SignupScreen} 
      options={
        {
          headerShown:false,
        }
      } />
      <Stack.Screen name="LogInPage" component={LoginScreen} 
      options={
        {
          headerShown:false,
        }
      }/>

    </Stack.Navigator>
  )
}

export default AuthNavigation
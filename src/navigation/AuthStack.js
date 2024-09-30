import {} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen/ForgotPassword';
import ChangePassword from '../screens/ChnagePassword/ChangePassword';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name ="Signin" component ={SigInScreen} options={{headerShown: false}}/>
        <Stack.Screen name ="Signup" component ={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name ="ForgotPassword" component ={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name ="ChangePassword" component ={ChangePassword} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};


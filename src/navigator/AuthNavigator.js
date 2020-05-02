import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screen/Auth/SignInScreen';
//import SignUpScreen from '../screen/Auth/SignUpScreen';
//import SignUpScreen2 from '../screen/Auth/SignUpScreen2';
//import SignUpScreen3 from '../screen/Auth/SignUpScreen3';
//import ForgotPasswordScreen from '../screen/Auth/ForgotPasswordScreen';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
      {/* <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} /> */}
      {/* <AuthStack.Screen name="SignUp2" component={SignUpScreen2} options={{headerShown: false}} /> */}
      {/* <AuthStack.Screen name="SignUp3" component={SignUpScreen3} options={{headerShown: false}} /> */}
      {/* <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}} /> */}
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;

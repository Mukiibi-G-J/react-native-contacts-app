import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {Login} from '../screens/Login';

const signup = () => {
  return (
    <View>
      <Text> Thi is the sign up page</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Contact Detail" component={signup} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

const signup = () => {
  return (
    <View>
      <Text> Thi is the sign up page</Text>
    </View>
  );
};
const login = () => {
  return (
    <View>
      <Text>This is the login page</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={login} />
      <AuthStack.Screen name="Contact Detail" component={signup} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/RouteNames';
import Contacts from '../screens/contacts/Contacts';

const COntactDetail = () => {
  return (
    <View>
      <Text>Detail of the contacts</Text>
    </View>
  );
};
const CreateContacts = () => {
  return (
    <View>
      <Text>Create your contact today</Text>
    </View>
  );
};
const settings = () => {
  return (
    <View>
      <Text>These are your settings</Text>
    </View>
  );
};
const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={COntactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContacts} />
      <HomeStack.Screen name={SETTINGS} component={settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

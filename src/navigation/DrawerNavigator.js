import React from 'react';
import {HOME_NAVIGATION} from '../constants/RouteNames';
import HomeNavigator from './HomeNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, Image} from 'react-native';
import Contacts from '../screens/contacts/Contacts';
import SideMenu from './SideMenu';
import {GlobaleContext} from '../Context/Provider';

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation, authDispatch) => {
  // return <HomeNavigator navigation={navigation} />;
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const {authDispatch} = React.useContext(GlobaleContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
      }}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={HOME_NAVIGATION} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

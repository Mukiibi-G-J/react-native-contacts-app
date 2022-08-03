import React from 'react';
import {HOME_NAVIGATION} from '../constants/RouteNames';
import HomeNavigator from './HomeNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAVIGATION} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

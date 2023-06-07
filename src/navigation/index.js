import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobaleContext} from '../Context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

const AppNavContainer = () => {
  console.log(AsyncStorage.getItem('user'));
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
  const {
    authState: {isLoggedIn},
  } = useContext(GlobaleContext);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    getUser();
  }, [isLoggedIn]);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        // <NavigationContainer ref={navigationRef}>
        //   {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        // </NavigationContainer>
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;

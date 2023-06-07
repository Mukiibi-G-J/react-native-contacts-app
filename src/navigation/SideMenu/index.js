import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './style';
import Container from '../../components/common/Container';
import Icon from '../../components/Icon';
import {useNavigation} from '@react-navigation/native';
import {SETTINGS} from '../../constants/RouteNames';
import logoutUser from '../../Context/actions/auth/logoutUser';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" size={17} name="player-settings" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" size={17} name="logout" color="black" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <View>
        <Container>
          <Text style={{color: 'black'}}>alskdjflaksjfakldjfaklfjaklfja</Text>
          <Image
            height={70}
            width={70}
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
          <View style={{paddingHorizontal: 30}}>
            {menuItems.map(({name, icon, onPress}) => (
              <TouchableOpacity
                onPress={onPress}
                key={name}
                style={styles.item}>
                <View style={styles.icon}>{icon}</View>
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;

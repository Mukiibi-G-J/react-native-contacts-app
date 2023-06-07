import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import {color} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../components/Icon';
import ContactsComponent from '../../components/ContactsComponent';

export default function Contacts() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {setOptions, toggleDrawer} = useNavigation();
  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon
            type="material"
            style={{padding: 10}}
            size={25}
            name="menu"
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
}

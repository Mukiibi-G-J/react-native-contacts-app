import {View, Text} from 'react-native';
import React from 'react';
import AppModel from '../common/AppModal';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModel setModalVisible={setModalVisible}  modalVisible={modalVisible} />
    </View>
  );
};

export default ContactsComponent;

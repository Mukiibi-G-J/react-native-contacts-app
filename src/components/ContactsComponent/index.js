import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import AppModel from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Message from '../common/messages';
import colors from '../../assets/theme/colors';
import styles from './styles';
import Icon from '../Icon';
const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  console.log(loading);
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };
  const renderItem = ({item}) => {
    const {contact_picture, first_name, country_code, phone_number, last_name} =
      item;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        // onPress={() => {rr
        //   navigate(CONTACT_DETAIL, {item});
        // }}
      >
        <View style={styles.item}>
          {false ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.grey,
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}

          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>

              <Text style={styles.name}> {last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon
          name="chevron-right"
          type="material"
          size={18}
          color={colors.grey}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View>
        {/* <CustomButton
        title="Open Modal"
        secondary
        onPress={() => {
          setModalVisible(true);
        }}
      /> */}
        <AppModel
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        <FlatList
          data={[...data]}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={renderItem}
          keyExtractor={item => {
            String(item.id);
          }}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="add" type="material" size={21} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;

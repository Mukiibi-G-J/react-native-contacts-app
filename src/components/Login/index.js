import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Container from '../common/Container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/RouteNames';

export default function LoginComponent() {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <Input
          label="Username"
          iconPosition="right"
          placeholder="Enter Username"
          // value={form.userName || null}
          // onChangeText={value => {
          //   onChange({name: 'userName', value});
          // }}
          style={{text: 'black'}}
        />

        <Input
          label="Password"
          placeholder="Enter Password"
          secureTextEntry={true}
          // icon={
          //   <TouchableOpacity
          //     onPress={() => {
          //       setIsSecureEntry(prev => !prev);
          //     }}>
          //     <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
          //   </TouchableOpacity>
          // }
          iconPosition="right"
          // onChangeText={value => {
          //   onChange({name: 'password', value});
          // }}
        />
        <CustomButton
          // disabled={loading}
          // onPress={onSubmit}
          // loading={loading}
          primary
          title="Submit"
        />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

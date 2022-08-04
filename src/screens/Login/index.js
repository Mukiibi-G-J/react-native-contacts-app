import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import LoginComponent from '../../components/Login';

export const Login = () => {
  //   const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <LoginComponent />
    </Container>
  );
};

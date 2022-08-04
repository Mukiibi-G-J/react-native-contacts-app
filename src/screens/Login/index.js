import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';

export const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="User Name"
        onChangeText={text => onChangeText(text)}
        icon={<Text style={{color: 'blue'}}>Hide</Text>}
        value={value}
        iconPosition="right"
        // error={'This field is required'}
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        icon={<Text>@</Text>}
        value={value}
        iconPosition="right"
        // error={'This field is requi red'}
      />
      <CustomButton title="submit" primary loading={true} />
      <CustomButton title="submit" primary loading={true} />
      <CustomButton title="submit" danger loading={false} />
    </Container>
  );
};

import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import {color} from 'react-native-reanimated';

export default function Contacts() {
  return (
    <Container style={{padding: 100}}>
      <View>
        <Text style={{color: 'black'}}> hi contacts</Text>
      </View>
    </Container>
  );
}

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import {color} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export default function Contacts() {
  // const {setOptions, toggleDrawer} = useNavigation();
  // React.useEffect(() => {
  //   setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         onPress={() => {
  //           toggleDrawer();
  //         }}>
  //         <Text style={{
  //           color: 'black',
  //                       fontSize: 20,
  //         }}>aldsfkas;l</Text>
  //         {/* <Icon/ type="material" style={{padding: 10}} size={25} name="menu" /> */}
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);
  return (
    <Container style={{padding: 100}}>
      <View>
        <Text style={{color: 'black'}}> hi contacts</Text>
      </View>
    </Container>
  );
}

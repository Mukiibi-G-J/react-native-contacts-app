import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  isLoggedIn: false,
  // AsyncStorage.setItem('token', res.data.token);
  // AsyncStorage.setItem('user', JSON.stringify(res.data.user));
  data: AsyncStorage.getItem('data') ? true : null,
  error: null,
  loading: false,
};

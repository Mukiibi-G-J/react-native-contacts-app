import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/input';
import CustomButton from '../../components/common/CustomButton';
import LoginComponent from '../../components/Login';
import {useRoute} from '@react-navigation/native';
import {GlobaleContext} from '../../Context/Provider';
import loginUser from '../../Context/actions/auth/loginUser';
import envs from '../../Config/env';
export const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      console.log(params?.data);
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params?.data]);
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobaleContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <Container>
      <LoginComponent
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        error={error}
        loading={loading}
        justSignedUp={justSignedUp}
      />
    </Container>
  );
};

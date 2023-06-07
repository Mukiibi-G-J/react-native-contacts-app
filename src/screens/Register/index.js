import {View, Text} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import RegisterComponent from '../../components/register';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import envs from '../../Config/env';
import axios from '../../helpers/axios';
import register, {clearAuthState} from '../../Context/actions/auth/register';
import {GlobaleContext} from '../../Context/Provider';
import {LOGIN} from '../../constants/RouteNames';

export default function Register() {
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobaleContext);

  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   if (data) {
  //     () => {
  //       navigate(LOGIN, {data});
  //     };
  //   }
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [authDispatch, data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a  first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      // console.log(register(form)(authDispatch));
      register(form)(authDispatch);

      navigate(LOGIN, {data});

      // (response => {
      //   navigate(LOGIN, {data: response});
      // });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
}

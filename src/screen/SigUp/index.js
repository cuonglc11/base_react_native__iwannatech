import {View, Text} from 'react-native';
import React, {useState, useEffect , useContext}  from 'react';
import SignUI from '../../components/SigUp';
import env from '../../cofig/env';
import instance from '../../helpers/axiosInterceptor';
import registet from '../../context/action/auth/registet';
import { GlobalContext } from '../../context/Provider';
const SignUp = () => {
  const [form, setFrom] = useState({});
  const [error, seterror] = useState({});
  console.log('even', form);
    // debugger
  const {authDispatct  , authRenducer : {data,loading , errors}
  } = useContext(GlobalContext)
  console.log("autg" , errors);
  

  const onChage = ({name, value}) => {
    setFrom({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length <= 6) {
          seterror(prev => {
            return {...prev, [name]: 'this password request lengt 6'};
          });
          console.log('value.length ', value.length);
        } else {
          seterror(prev => {
            return {...prev, [name]: null};
          });
        }
      }
      seterror(prev => {
        return {...prev, [name]: null};
      });
    } else {
      seterror(prev => {
        return {...prev, [name]: 'this field is request'};
      });
    }
  };
  const onSubmit = () => {
    // validation
    console.log('From', form , errors);

    if (!form.useName) {
      seterror(prev => {
        return {...prev, useName: 'Please add a username'};
      });
    }
    if (!form.fristName) {
      seterror(prev => {
        return {...prev, fristName: 'Please add a FristName'};
      });
    }
    if (!form.lastName) {
      seterror(prev => {
        return {...prev, lastName: 'Please add a LastName'};
      });
    }
    if (!form.email) {
      seterror(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      seterror(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0)
    ) {
      registet(form)(authDispatct)
      // debugger
    }
  };
  return (
    <SignUI onSubmit={onSubmit} onChage={onChage} form={form} errors={error} errorss = {errors} loading={loading} />
  );
};

export default SignUp;

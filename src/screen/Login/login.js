import {View, Text, TextInput} from 'react-native';
import React, {useState , useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import LoginUI from '../../components/Login';
import loginauth from '../../context/action/auth/loginauth';
import { GlobalContext } from '../../context/Provider';
const login = () => {
  const [from, setFrom] = useState({});
  const {navigate} = useNavigation();
  const {authDispatct  , authRenducer
  } = useContext(GlobalContext)

  console.log("Form" , authDispatct);
  const onSubmit = () => {
    if(from.usename  && from.password){
         loginauth(from)(authDispatct)
         console.log(1111);
    }
    // debugger/
    console.log(12);

  }
  const onChage = ({name , value})=>{
    setFrom({...from , [name]: value})
  }
  return <LoginUI onSubmit={onSubmit} onChage={onChage} from={from} />;
};

export default login;

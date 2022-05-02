import {View, Text, TextInput, StyleSheet , TouchableOpacity , ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import color from '../../asset/color';

const MakeButton = ({
    title,
    loading,
    disabled,
    secondary, 
    primary,
    danger,
    onClick,
  ...props
}) => {
  const [focused, setFocuse] = useState(false);
  
  const getBgColor = () => {
      if(disabled){
          return color.grey
      }
    if (primary) {
      return color.primary;
    }
    if (danger) {
      return color.danger;
    } 
    if(secondary) {
      return color.secondary;
    }
  };
  return (
    <TouchableOpacity
    disabled={disabled}
    onPress={onClick}
    style={[styles.wrapper ,{backgroundColor:getBgColor()}]}>
      {title && <Text style={{fontWeight : 'bold' , fontSize : 17 , color :disabled? color.black : color.white}}>{title}</Text>}
     </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  inputButton :{
    paddingVertical: 12
  }  ,
  input: {
    flex: 1,
    width :'100%'
  },
  texterror: {
    color: color.danger,
    fontSize: 16,
    paddingTop: 4,
  },
  wrapper: {
    height: 42,
    paddingVertical : 5,
    borderRadius: 4,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent :'space-evenly',
    marginTop : 10
  },
});

export default MakeButton;

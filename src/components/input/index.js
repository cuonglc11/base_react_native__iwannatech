import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import color from '../../asset/color';

const MakeInput = ({
  onChangeText,
  icon,
  style,
  value,
  lablel,
  placeholder,
  iconPosition,
  error,
  keyboardType = 'default',
  secureTextEntry = false,
  ...props
}) => {
  const [focused, setFocuse] = useState(false);
  const getFixDre = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return color.primary;
    }
    if (error) {
      return color.danger;
    } else {
      return color.grey;
    }
  };
  return (
    <View style={{paddingVertical: 12}}>
      {lablel && <Text style={{fontWeight : 'bold' , fontSize : 17 , color :color.black}}>{lablel}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFixDre()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
        placeholder={placeholder}
          style={[style, styles.input]}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onFocus={() => setFocuse(true)}
          onBlur={() => setFocuse(false)}
        {...props}
        />
      </View>
      {error && <Text style={styles.texterror}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 5,
    // alignItems: 'center',
  },
});

export default MakeInput;

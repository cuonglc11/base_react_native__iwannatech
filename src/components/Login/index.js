import {View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';
import MakeButton from '../Button';
import { useNavigation } from '@react-navigation/native';
import MakeInput from '../input';
import Container from '../common/container';
import color from '../../asset/color';
import { SIGINUP } from '../../contaner/routerName';
const LoginUI = ({form, onSubmit, onChage}) => {
    const {navigate} = useNavigation()
  return (
    <Container>
      <View>
        <Text style={styles.title}>Login Dev Manh Cuong</Text>
        <Text style={styles.subtitle}>Login Press</Text>
        <View style={styles.form}>
        <MakeInput
          lablel="UseName"
          iconPosition="left"
          placeholder="Use Name"
          onChangeText={value => {
            onChage({name: 'usename', value});
          }}
        />
        <MakeInput
          lablel="PassWord"
          placeholder="PassWord"
          iconPosition="right"
          secureTextEntry={true}
          onChangeText={value => {
            onChage({name: 'password', value});
          }}
          icon={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Show</Text>}
        />
        <MakeButton title="Login" onClick={onSubmit} primary/>
        <View>
            <Text>Nedd a new accout??</Text>
            <TouchableOpacity
             onPress={()=> navigate(SIGINUP)}
            >
                <Text>New Accout</Text>
            </TouchableOpacity>
             
        </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    alignSelf: 'center',
    color: color.black,
    fontWeight: 'boid',
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 17,
    alignSelf: 'center',
    color: color.black,
    paddingTop: 20,
  },
  form : {
      padding : 20
  }
});
export default LoginUI;

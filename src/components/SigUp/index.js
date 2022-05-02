import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MakeButton from '../Button';
import {useNavigation} from '@react-navigation/native';
import MakeInput from '../input';
import Container from '../common/container';
import color from '../../asset/color';
import {LOGIN, SIGINUP} from '../../contaner/routerName';
const SignUI = ({form, onSubmit, onChage, errors , loading  , errorss}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View>
        <Text style={styles.title}>New Accout Dev Manh Cuong</Text>
        <Text style={styles.subtitle}> New Accout </Text>
        
        <View style={styles.form}>
          <MakeInput
            lablel="useNAME"
            iconPosition="left"
            placeholder="Use Name"
            onChangeText={value => {
              onChage({name: 'useName', value});
            }}
            error={errors.useName}
          />
          <MakeInput
            lablel="Frist Name"
            iconPosition="left"
            placeholder="Use Name"
            onChangeText={value => {
              onChage({name:'fristName', value});
            }}
            error={errors.fristName}
          />
          <MakeInput
            lablel="LastName"
            iconPosition="left"
            placeholder="LastName"
            onChangeText={value => {
              onChage({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <MakeInput
            lablel="Email"
            iconPosition="left"
            placeholder="Email"
            onChangeText={value => {
              onChage({name: 'email', value});
            }}
            error={errors.email}
          />
          <MakeInput
            lablel="PassWord"
            placeholder="PassWord"
            iconPosition="right"
            secureTextEntry={true}
            icon={<Text style={{fontSize: 16, fontWeight: 'bold'}}>Show</Text>}
            onChangeText={value => {
              onChage({name:'password', value});
            }}
            error={errors.password}
          />
          {console.log("dd",loading)}
          <MakeButton title="Login" primary onClick={onSubmit} disabled={loading} />
          <View>
            <Text>Nedd a new accout??</Text>
            <TouchableOpacity  onPress={() => navigate(LOGIN)}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
          {/* <MakeButton title="Sign In" loading={true} secondary /> */}
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
  form: {
    padding: 20,
  },
});
export default SignUI;

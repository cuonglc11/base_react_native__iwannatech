import React from 'react'
import {Text , View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { LOGIN, SIGINUP } from '../contaner/routerName'
import login from '../screen/Login/login'
import SignUp from '../screen/SigUp'

const SigUP = () => {
    return (
    <View>
        <Text>SigUp </Text>
    </View>
    )
}
const AuthNavigator = ()  => {
    const HomeStack  = createStackNavigator()
    return (
     <HomeStack.Navigator
     screenOptions={{headerShown:false}}
     
     >
     <HomeStack.Screen name={LOGIN} component={login}></HomeStack.Screen>
     <HomeStack.Screen name={SIGINUP} component={SignUp}></HomeStack.Screen>

     </HomeStack.Navigator>
    )
}
export default AuthNavigator
import React from 'react'
import {Text , View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import contact from '../screen/Contact/contact'

const ContactDetail = () => {
    return (
    <View>
        <Text>Contact Detail </Text>
    </View>
    )
}
const Setting = () => {
    return (
    <View>
        <Text>Setting </Text>
    </View>
    )
}
const HomeNavigator = ()  => {
    const HomeStack  = createStackNavigator()
    return (
     <HomeStack.Navigator initialRouteName='Contact'>
     <HomeStack.Screen name='Contact' component={contact}></HomeStack.Screen>
     <HomeStack.Screen name='ContactDetail' component={ContactDetail}></HomeStack.Screen>
     <HomeStack.Screen name='Setting' component={Setting}></HomeStack.Screen>

     </HomeStack.Navigator>
    )
}
export default HomeNavigator
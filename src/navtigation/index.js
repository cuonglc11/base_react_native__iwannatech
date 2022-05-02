import React ,{useContext , useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppNavContainer  = () => {
    const [isAuthenticated , setisAuthenticated] = useState(false)
    const getUser = async() => {
            try {
            const user =    await AsyncStorage.getItem('user')
            if(user){
                setisAuthenticated(true)
            }else{
                setisAuthenticated(false)
            }
            } catch (error) {
                
            }
    }
    useEffect(() =>{ 
            getUser()
    },[])
    const {authRenducer : {isLoggedIn}} = useContext(GlobalContext)
    console.log("lgoi" , isAuthenticated);
    return(
        <NavigationContainer>
             {isAuthenticated ? <HomeNavigator/> :  <AuthNavigator/> }
         </NavigationContainer>
    )
}
export default AppNavContainer
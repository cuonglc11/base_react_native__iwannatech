import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import env  from '../cofig/env'
let headers = {}
const instance = axios.create({
    baseURL  :env.DEV_BACK_URI,
    headers
})
console.log("ggg" , env.DEV_BACK_URI);
instance.interceptors.request.use((config)=>{
    const token  =  AsyncStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
},(error)=>{
    return Promise.reject(error)
})
export default instance
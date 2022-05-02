import { LOGIN_FAIL , LOGIN_SUCCESS , LOGIN_LOADING, REGISTET_LOADING, REGISTET_SUCCESS } from '../../../contaner/actiontype';
import instance from '../../../helpers/axiosInterceptor';
export default ({password : password, username : username})=> dispatch => {
  dispatch({
    type : LOGIN_LOADING
  })
  
  instance.post('auth/login', {
    password,
    username,
    
  }).then((res)=> {
    console.log("ee" , res.data);
    dispatch({
      type  : LOGIN_SUCCESS,
      payload  : res.data
    })

  }).catch((err)=> {
      console.log("reee" , err);
    dispatch({
      type : LOGIN_FAIL ,

      payload : err.response?err.response.data:{error : "Somting not data"}
    })
  });
};

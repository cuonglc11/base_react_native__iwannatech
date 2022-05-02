import { REGISTET_FAIL, REGISTET_LOADING, REGISTET_SUCCESS } from '../../../contaner/actiontype';
import instance from '../../../helpers/axiosInterceptor';

export default ({email, password, usename : username, firstName :first_name, lastName :last_name})=> dispatch => {
  dispatch({
    type : REGISTET_LOADING
  })
  
  instance.post('api/auth/register', {
    email,
    password,
    username,
    first_name,
    last_name,
  }).then((res)=> {
    dispatch({
      type  : REGISTET_SUCCESS,
      payload  : res.data
    })

  }).catch((err)=> {

    dispatch({
      type : REGISTET_FAIL ,
      payload : err.response?err.response.data:{error : "Somting not data"}
    })
  });
};

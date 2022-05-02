import {LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, REGISTET_FAIL, REGISTET_LOADING, REGISTET_SUCCESS} from '../../contaner/actiontype';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTET_LOADING:
    case LOGIN_LOADING:
      return {...state, loading: true};
    case REGISTET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
     case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn : true
      }; 
      case REGISTET_FAIL:
        case LOGIN_FAIL:
        console.log("fail");
        return {
          ...state,
          loading: false,
          errors: payload,
        };

    default:
      return state;
  }
};
export default auth;

import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

export const auth = (state, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case REGISTER_FAIL:
  
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

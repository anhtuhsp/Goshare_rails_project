import * as login from '../actions/loginAction';

const initialState = {
  isLogin: false,
  name: '',
  nickname: '',
  token: '',
  userID: '',
  isLoading: true,
  image: ''
  // NOTE
  // some thing you want to set global
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        name: action.name,
        userID: action.userID,
        image: action.picture
      };

    case login.ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    // NOTE
    // write case to update initialState
    default:
      return state;
  }
};

export default loginReducer;

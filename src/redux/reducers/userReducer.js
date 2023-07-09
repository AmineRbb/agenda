// redux/reducers/userReducer.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const setIsLogin = (isLogin) => ({
  type: 'SET_ISLOGIN',
  payload: isLogin,
});

export const setIsAdmin = (isAdmin) => ({
  type: 'SET_ISADMIN',
  payload: isAdmin,
});

export const setIsPro = (isPro) => ({
  type: 'SET_ISPRO',
  payload: isPro,
});
const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    city: '',
    roles: ''
  },
  isLogin: false,
  isAdmin: false,
  isPro: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_ISLOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'SET_ISADMIN':
      return {
        ...state,
        isAdmin: action.payload,
      };
    case 'SET_ISPRO':
      return {
        ...state,
        isPro: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

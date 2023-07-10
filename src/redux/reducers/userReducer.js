// redux/reducers/userReducer.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const disconnect = () => ({
  type: 'DISCONNECT_USER',
});

export const setRoles = (roles) => ({
  type: 'SET_ROLES',
  payload: roles,
});

const initialState = {
  connectedUser: {
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
        isLogin: true,
        connectedUser: action.payload,
      };
    case 'DISCONNECT_USER':
        localStorage.removeItem('agendaToken');
        return {
          ...state,
          isLogin: false,
          isAdmin: false,
          isPro: false,
          connectedUser: {},
        };
      case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_ROLES':
      return {
        ...state,
        isAdmin: action.payload.some(roles => roles.name === 'ADMIN'),
        isPro: action.payload.some(roles => roles.name === 'PRO')
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

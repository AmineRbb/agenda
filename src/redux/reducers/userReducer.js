// redux/reducers/userReducer.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

const initialState = {
  token: "notlogin"
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
    default:
      return state;
  }
};

export default userReducer;

// redux/reducers/userReducer.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

const initialState = {
  user: { 
    jwt: "",
    name: "testAM",
    email:"testAM@gmail.com"
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      let newState = {
        ...state,
        user: action.payload,
      };
      return newState;
    default:
      return state;
  }
};


export default userReducer;

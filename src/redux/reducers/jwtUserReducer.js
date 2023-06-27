// redux/jwtTokenReducer.js
const initialState = '';

const jwtUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JWT_USER':
      return action.payload;
    default:
      return state;
  }
};

export default jwtUserReducer;
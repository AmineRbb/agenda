// redux/currentPageReducer.js
const initialState = '';

const currentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.payload;
    default:
      return state;
  }
};

export default currentPageReducer;

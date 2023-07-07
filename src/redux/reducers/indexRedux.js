// redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import store from '../store.js';
//import App from '../../App';

 
/*ReactDOM.render(
    <Provider store={store}>
      <App /> 
    </Provider>,
    document.getElementById('root')
  );*/

const rootReducer = combineReducers({
  user: userReducer,
});
  

export default rootReducer;

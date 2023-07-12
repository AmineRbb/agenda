// redux/reducers/index.js
import { combineReducers } from 'redux';
//import userReducer from './userReducer';
import rdvReducer from './rdvReducer';
import rdvListReducer from './rdvListReducer';
import appelServiceReducer from './appelServiceReducer';
import { userSliceReducer } from '../slices/user';
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
  userSlice: userSliceReducer,
//  user: userReducer,
  rdv: rdvReducer,
  rdvList: rdvListReducer,
  appelService: appelServiceReducer,
});
  

export default rootReducer;

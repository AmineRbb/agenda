import { combineReducers } from 'redux';
import { userSliceReducer } from '../slices/user';
import { rdvSliceReducer } from '../slices/rdv';

const rootReducer = combineReducers({
  userSlice: userSliceReducer,
  rdvSlice: rdvSliceReducer,
});


export default rootReducer;

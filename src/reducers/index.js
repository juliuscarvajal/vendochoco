import bank from './bank';
import menu from './menu';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  bank,
  menu,
});
export default rootReducer;

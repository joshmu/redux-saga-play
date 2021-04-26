import { combineReducers } from 'redux';
import { itemReducer } from './itemReducer';
import { toggleReducer } from './toggleReducer';

export default combineReducers({ items: itemReducer, showHide: toggleReducer });

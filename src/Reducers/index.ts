import { combineReducers } from 'redux';
import * as reducers from './exportReducers';


export const rootReducer = combineReducers({
    ...reducers
});
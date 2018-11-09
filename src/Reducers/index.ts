import { combineReducers } from 'redux';
import * as reducers from './exportReducers';
import { reducer as formReducer } from 'redux-form';


export const rootReducer = combineReducers({
    ...reducers,
    form: formReducer
});
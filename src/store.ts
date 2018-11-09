import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './Reducers';
import thunk from 'redux-thunk';
import services from './Services';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(services))
);

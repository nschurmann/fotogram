import './index.css';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from  'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import { loadUserInitialData } from './Thunks/Users'

const history = createHistory();
const loadInitialData = () => store.dispatch(loadUserInitialData)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}> 
            <App loadInitialData={loadInitialData} history={history}/>
        </Router>
    </Provider>
    , document.getElementById('root') as HTMLElement
    );

serviceWorker.register();

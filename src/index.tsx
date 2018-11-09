import './index.css';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from  'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}> 
            <App />
        </Router>
    </Provider>
    , document.getElementById('root') as HTMLElement
    );

serviceWorker.register();

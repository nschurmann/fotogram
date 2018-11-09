import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createHistory } from 'history';

const history = createHistory()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

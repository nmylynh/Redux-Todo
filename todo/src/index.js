import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers';

import App from './App';
import './index.css';

ReactDOM.render(
    <Provider store={createStore(todos)}>
      <App />
    </Provider>
    , document.getElementById('root')
  );
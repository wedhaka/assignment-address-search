import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/global.scss';
import App from './views/App';
import { Provider } from 'react-redux';
import store from './application/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
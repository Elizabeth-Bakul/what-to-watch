import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films}  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
